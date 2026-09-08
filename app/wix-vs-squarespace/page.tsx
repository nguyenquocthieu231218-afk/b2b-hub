import React from 'react';
import ComparisonLayout from '../components/ComparisonLayout';

export default function WixVsSquarespace() {
  return (
    <ComparisonLayout
      title="Wix vs Squarespace: Which Website Builder Wins in 2026?"
      lead="Building a visual website without coding often leads to Wix or Squarespace. Wix provides absolute layout flexibility with drag-and-drop precision, while Squarespace focuses on polished, designer-grade templates and minimalist aesthetics."
      toolAName="Wix"
      toolBName="Squarespace"
      toolALink="https://wix.com"
      toolBLink="https://squarespace.com"
      verdictText="Choose Wix if you want pixel-perfect design freedom, an extensive app marketplace, and diverse features for local businesses. Choose Squarespace if you prioritize high-end visual aesthetics, clean typography, and built-in blogging or portfolio layouts."
      tableData={[
        {
          metric: "Best For",
          toolA: "Absolute design freedom & feature-heavy sites",
          toolB: "Portfolios, creative agencies & sleek brand sites"
        },
        {
          metric: "Editor Style",
          toolA: "Unstructured drag-and-drop canvas",
          toolB: "Section-based Fluid Engine grid"
        },
        {
          metric: "Starting Price",
          toolA: "~$16 / month",
          toolB: "~$16 / month"
        },
        {
          metric: "App Marketplace",
          toolA: "500+ third-party apps & widgets",
          toolB: "Curated native extensions"
        }
      ]}
      coreDifferenceTextA="gives you absolute control over element placement on screen. Its flexible editor allows creators to build custom layouts, web apps, and member portals with minimal constraints."
      coreDifferenceTextB="enforces clean grid structures that prevent design mistakes. It delivers premium, responsive layouts out of the box with exceptional typography and built-in scheduling tools."
      recommendationA="You need complete design autonomy, specialized functional apps (like bookings or event ticketing), and custom page layouts."
      recommendationB="You are a photographer, designer, or agency owner looking for clean aesthetics, curated typography, and minimal setup effort."
    />
  );
}
