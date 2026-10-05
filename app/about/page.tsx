export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-6">About Us</h1>
        <p className="text-slate-400 text-lg mb-6">
          StackEvalify provides independent technical evaluations and benchmarks for engineering teams.
        </p>
        <a href="/" className="text-blue-400 hover:underline">&larr; Back to Home</a>
      </div>
    </div>
  );
}
