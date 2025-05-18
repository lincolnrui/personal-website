import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
          Lincoln Wang
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto mb-12">
          Welcome to my digital space
        </p>
        <nav className="flex gap-12 justify-center items-center">
          <Link 
            href="/about"
            className="text-lg uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
          >
            About
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link 
            href="/contact"
            className="text-lg uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
          >
            Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
