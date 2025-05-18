import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-light tracking-tight">
                Building
                <br />
                <span className="text-[#ff9666]">digital</span>
                <br />
                experiences
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Creating elegant solutions through code and design.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/about"
                  className="px-8 py-3 bg-black text-white rounded-full hover:bg-[#ff9666] transition-colors"
                >
                  Learn More
                </a>
                <a 
                  href="/contact"
                  className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff9666]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Design', 'Develop', 'Deploy'].map((item) => (
              <div key={item} className="space-y-4">
                <h3 className="text-2xl font-light">{item}</h3>
                <p className="text-gray-600">
                  Creating seamless experiences that combine form and function.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
