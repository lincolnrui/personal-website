export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hello! I'm Lincoln. This space represents my journey, interests, and aspirations.
            [You can customize this text with your own story]
          </p>
          {/* Add more content sections here */}
        </div>
      </div>
    </main>
  );
} 