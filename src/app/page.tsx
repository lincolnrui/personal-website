import Link from 'next/link';

// Main page component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-8 py-16">
        <h1 className="text-[120px] leading-none font-bold tracking-tighter">
          Lincoln Wang
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Welcome to my website
        </p>
        <div className="flex gap-8 mt-12">
          <Link 
            href="/about" 
            className="text-2xl text-gray-600 hover:text-black transition-colors border-2 border-transparent hover:border-b-black"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-2xl text-gray-600 hover:text-black transition-colors border-2 border-transparent hover:border-b-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
