import Image from 'next/image';

export default function IphoneReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        
        {/* Tiêu đề bài viết */}
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            iPhone 18 Pro Max Review: Subtle Upgrades and Irresistible Appeal
          </h1>
          <div className="text-sm text-slate-400 flex items-center gap-4">
            <span>By StackEvalify Engineering Team</span>
            <span>•</span>
            <time dateTime="2026-09-29">Updated: September 29, 2026</time>
          </div>
        </header>

        {/* 📸 CHÈN ẢNH BÌA TỪ FILE DÀI CỦA BRO */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800">
          <Image 
            src="/images/photo-1759588071814-f960ed8f7ee8.avif" 
            alt="iPhone 18 Pro Max hands-on review" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Nội dung bài viết */}
        <section className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg">
            Apple continues to cement its flagship dominance not through radical overhauls, but through a steady and pragmatic upgrade cycle. The <strong>iPhone 18 Pro Max</strong> packs a powerful punch, featuring the cutting-edge <strong>Apple A20 Pro</strong> chip and the Pro Max lineup&apos;s first-ever variable physical aperture main camera.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">1. Performance & Real-World Experience</h2>
          <p>
            After over a week of hands-on testing, the iPhone 18 Pro Max clearly embraces the philosophy of &quot;refining what already works&quot; rather than chasing gimmicks.
          </p>

          {/* 📸 CHÈN ẢNH CAMERA TỪ FILE cam.avif CỦA BRO */}
          <div className="my-6">
            <Image 
              src="/images/cam.avif" 
              alt="iPhone 18 Pro Max camera variable aperture" 
              width={1200} 
              height={800} 
              className="rounded-xl border border-slate-800"
            />
            <p className="text-center text-sm text-slate-500 mt-2">The new variable physical aperture camera system in action.</p>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">2. Is it Worth the Upgrade?</h2>
          <p>
            If you are currently using a recent predecessor like the iPhone 17 Series, upgrading might not feel strictly necessary. However, for users holding onto older devices such as the <strong>iPhone 14 Series or 15 Series and below</strong>, the cumulative leap in raw performance makes it a brilliant investment.
          </p>
        </section>

        {/* Nút quay về */}
        <div className="pt-8 border-t border-slate-800">
          <a href="/" className="text-blue-400 hover:underline">&larr; Back to Home</a>
        </div>

      </article>
    </main>
  );
}
