export default function GrowWithInnoX() {
  return (
    <section
      className="w-full min-h-[480px] h-[70vh] md:h-[700px] overflow-hidden shrink-0 bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: 'url(\'/assets/images/modules/grow.png\')',
      }}
    >
      <div className="bg-black/50 h-full w-full absolute top-0" />

      <div className="container mx-auto px-4 relative flex items-center h-full">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Grow with InnoX
          </h2>
          <p className="text-sm sm:text-base md:text-md mb-8">
            Empower your business with InnoX&apos;s comprehensive solutions
            designed to drive growth and innovation. Discover how InnoX can
            transform your operations and elevate your success.
          </p>
          <button className="bg-orange-500 text-white-900 font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
