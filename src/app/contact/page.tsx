export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
          Contact
        </h1>
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            Feel free to reach out to me at:
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="text-accent hover:underline text-lg block"
          >
            your.email@example.com
          </a>
          {/* Add social links or other contact methods here */}
        </div>
      </div>
    </main>
  );
} 