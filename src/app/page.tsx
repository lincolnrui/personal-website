import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center p-8 md:p-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Development
            <br />
            made <span className="text-[#ff9666]">simple</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl">
            Welcome to my digital playground
          </p>
          
          <nav className="flex gap-8 pt-8">
            <Link 
              href="/about"
              className="text-lg px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              About
            </Link>
            <Link 
              href="/contact"
              className="text-lg px-6 py-2 rounded-full bg-black text-white hover:bg-[#ff9666] hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
