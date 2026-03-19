export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      {/* Dark overlay com degradê azul escuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#020818]/75 to-[#030d2e]/70" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#000510] to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl w-full">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          Apresentação Profissional
        </span>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Kauan Mizael
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            de Oliveira
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-lg md:text-xl tracking-wide leading-relaxed">
          Administração&nbsp;•&nbsp;Comercial
          <br className="sm:hidden" />
          &nbsp;•&nbsp;Vendas&nbsp;•&nbsp;TI
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full sm:w-auto">
          <a
            href="mailto:kauanoliveiraicb3k@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Fale Comigo
          </a>
          <a
            href="https://wa.me/5519995676011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.845L.057 23.427a.75.75 0 00.916.916l5.582-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.498-5.24-1.37l-.376-.218-3.898 1.023 1.023-3.898-.218-.376A10 10 0 1112 22z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mt-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Campinas – SP &nbsp;•&nbsp; 19 anos
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#sobre" className="absolute bottom-6 text-gray-600 hover:text-gray-400 transition-colors animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
