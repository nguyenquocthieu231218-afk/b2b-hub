export type SearchableComparison = {
  title: string;
  category: string;
};

export function normalizeSearch(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function searchText(comparison: SearchableComparison): string {
  const aliases = comparison.title.includes('Monday') ? 'monday.com' : '';
  return normalizeSearch(`${comparison.title} ${comparison.category} ${aliases}`);
}

export function searchComparisons<T extends SearchableComparison>(
  comparisons: readonly T[],
  query: string,
  category = '',
): T[] {
  const words = normalizeSearch(query).split(' ').filter(Boolean);

  return comparisons.filter((comparison) => {
    if (category && comparison.category !== category) return false;
    const text = searchText(comparison);
    return words.every((word) => text.includes(word));
  });
}

// Short product-name suggestions use edit distance, including swapped letters.
function editDistance(left: string, right: string): number {
  const rows = Array.from({ length: left.length + 1 }, () =>
    Array<number>(right.length + 1).fill(0),
  );

  for (let i = 0; i <= left.length; i += 1) rows[i][0] = i;
  for (let j = 0; j <= right.length; j += 1) rows[0][j] = j;

  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      rows[i][j] = Math.min(
        rows[i - 1][j] + 1,
        rows[i][j - 1] + 1,
        rows[i - 1][j - 1] + (left[i - 1] === right[j - 1] ? 0 : 1),
      );
      if (
        i > 1 && j > 1 &&
        left[i - 1] === right[j - 2] && left[i - 2] === right[j - 1]
      ) {
        rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1);
      }
    }
  }

  return rows[left.length][right.length];
}

export function getSearchSuggestions(
  comparisons: readonly SearchableComparison[],
  query: string,
): string[] {
  const words = normalizeSearch(query).split(' ').filter(Boolean);
  if (words.length === 0) return [];

  const vocabulary = new Map<string, string>();
  for (const comparison of comparisons) {
    for (const word of comparison.title.match(/[A-Za-z][A-Za-z0-9]*/g) ?? []) {
      if (word.toLowerCase() !== 'vs') vocabulary.set(normalizeSearch(word), word);
    }
  }

  const corrections = words.map((word) => {
    if (word.length < 4 || word.length > 40 || vocabulary.has(word)) return word;
    const maxDistance = word.length <= 5 ? 1 : 2;
    let closest = word;
    let closestDistance = maxDistance + 1;

    for (const [candidate, display] of vocabulary) {
      if (Math.abs(candidate.length - word.length) > maxDistance) continue;
      const distance = editDistance(word, candidate);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = display;
      }
    }

    return closest;
  });

  const suggestion = corrections.join(' ');
  if (normalizeSearch(suggestion) === normalizeSearch(query)) return [];
  return searchComparisons(comparisons, suggestion).length > 0 ? [suggestion] : [];
}
