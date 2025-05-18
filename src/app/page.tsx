import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
          Lincoln Wang
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto">
          Welcome to my digital space
        </p>
        <nav className="flex gap-8 justify-center mt-12">
          <Link 
            href="/about"
            className="text-lg uppercase tracking-wider hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="text-lg uppercase tracking-wider hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
