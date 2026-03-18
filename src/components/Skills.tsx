import FadeIn from "./FadeIn";

const MonitorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const skills = [
  { category: "Tecnologia", icon: <MonitorIcon />, items: ["HTML", "Pacote Office", "Adobe", "Informática Intermediária"], color: "from-blue-600/20 to-blue-900/10", border: "border-blue-700/30 hover:border-blue-500/50", badge: "bg-blue-500/10 text-blue-300", iconColor: "text-blue-400" },
  { category: "Gestão", icon: <ChartIcon />, items: ["Gestão de TI", "Contabilidade", "Gestão Tributária", "Metodologias Ágeis"], color: "from-indigo-600/20 to-indigo-900/10", border: "border-indigo-700/30 hover:border-indigo-500/50", badge: "bg-indigo-500/10 text-indigo-300", iconColor: "text-indigo-400" },
  { category: "Comercial", icon: <BriefcaseIcon />, items: ["Vendas B2B", "E-commerce", "Gestão de Carteira", "Negociação"], color: "from-cyan-600/20 to-cyan-900/10", border: "border-cyan-700/30 hover:border-cyan-500/50", badge: "bg-cyan-500/10 text-cyan-300", iconColor: "text-cyan-400" },
  { category: "Soft Skills", icon: <UsersIcon />, items: ["Gestão de Tempo", "Gestão de Pessoas", "Liderança", "Comunicação"], color: "from-violet-600/20 to-violet-900/10", border: "border-violet-700/30 hover:border-violet-500/50", badge: "bg-violet-500/10 text-violet-300", iconColor: "text-violet-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-8 sm:mb-10">
            Stack de Competências
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <FadeIn key={s.category} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`group rounded-2xl p-5 border transition-all duration-300 bg-gradient-to-br ${s.color} ${s.border} hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={s.iconColor}>{s.icon}</span>
                  <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold">{s.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className={`text-xs px-2.5 py-1 rounded-full border border-white/10 ${s.badge}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
