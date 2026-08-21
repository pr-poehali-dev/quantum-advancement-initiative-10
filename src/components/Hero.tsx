export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/9b96e045-17f1-4e8a-8a97-5efe3143c1e5.jpg"
          alt="Вафельная продукция Варюня"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/60 via-black/45 to-black/60" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-8 md:pt-0">
        <div className="pt-16 md:pt-0">
          <div className="flex justify-center mb-8">
            <p className="inline-block text-base md:text-lg font-bold tracking-[0.2em] uppercase text-center text-white border-2 border-white/70 rounded-full px-6 py-2.5 backdrop-blur-sm bg-black/10">
              {"Варюня — вафельная продукция оптом"}
            </p>
          </div>

          <h1 className="text-6xl font-bold text-balance text-center text-white mb-0 tracking-tight leading-[1.05] lg:text-8xl lg:leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            {"Стаканчики, рожки,"}
            <br />
            <span className="text-primary">{"тарталетки, коржи"}</span>
          </h1>

          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-10 py-5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              Получить прайс-лист
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}