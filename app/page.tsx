export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-8 py-6">
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          Joyfully
        </span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center px-8 py-20 max-w-2xl mx-auto w-full">
        <p className="text-sm font-medium text-indigo-600 mb-4 tracking-wide uppercase">
          App Development &amp; Operations
        </p>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          We build and operate<br />mobile applications.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          アプリの開発・運用に特化したチームです。
        </p>

        {/* Apps */}
        <div className="mt-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Our Apps
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://ishigakipay.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5 transition hover:border-indigo-100 hover:bg-indigo-50"
            >
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-indigo-700">
                  IshigakiPay
                </p>
                <p className="text-sm text-gray-400 mt-0.5">石垣島のローカル決済アプリ</p>
              </div>
              <svg className="text-gray-300 group-hover:text-indigo-400 transition" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://bluereel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5 transition hover:border-indigo-100 hover:bg-indigo-50"
            >
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-indigo-700">
                  Blue Reel
                </p>
                <p className="text-sm text-gray-400 mt-0.5">動画・メディアアプリ</p>
              </div>
              <svg className="text-gray-300 group-hover:text-indigo-400 transition" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-100">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Joyfully. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
