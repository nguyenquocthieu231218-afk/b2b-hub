export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-6">Contact Us</h1>
        <p className="text-slate-400 text-lg mb-6">
          Get in touch with our team at: <span className="text-blue-400 font-mono">contact@stackevalify.com</span>
        </p>
        <a href="/" className="text-blue-400 hover:underline">&larr; Back to Home</a>
      </div>
    </div>
  );
}
