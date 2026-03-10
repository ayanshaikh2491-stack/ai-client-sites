"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          🚀 AI Client Site Live!
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Successfully deployed from AI Agency. Ready to generate content.
        </p>
        
        <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-800 shadow-lg">
          <p className="text-sm text-green-400 font-mono">
            ✅ System Status: Online<br/>
            ✅ Security: Active<br/>
            ✅ Performance: Optimized
          </p>
        </div>
      </div>
    </main>
  );
}
