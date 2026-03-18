import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Supervisor de Expansão",
    company: "MultiOne",
    period: "Mar 2026 — Presente",
    current: true,
    description:
      "Supervisão e gestão de projetos de expansão da empresa, garantindo cumprimento de prazos, orçamento e padrões operacionais. Manter acompanhamento e relacionamento com parceiros ativos.",
  },
  {
    role: "Consultor de Expansão",
    company: "MultiOne",
    period: "Jun 2025 — Fev 2026",
    current: false,
    description:
      "Atuação no setor de grandes contas liderando o processo comercial da MultiOne, com foco em parcerias estratégicas e modelos de negócio licenciados. Estruturação de novas oportunidades, gestão de carteira de parceiros e expansão da marca no mercado de franquias.",
  },
  {
    role: "Account Executive",
    company: "MultiOne",
    period: "Abr 2025 — Jun 2025",
    current: false,
    description:
      "Responsável pelo processo comercial como um todo, desde prospecção e venda de soluções de entrada, com foco em ajudar empresas a implementarem atendimento personalizado por I.A.",
  },
  {
    role: "Jovem Aprendiz — Atendente de Loja",
    company: "Grupo Fartura de Hortifrúti S.A",
    period: "Jan 2023 — Jul 2024",
    current: false,
    description:
      "Atuação no setor administrativo, conferência e controle de estoque e atendimento ao cliente. Manuseio do sistema interno de gestão e suporte às operações do ponto de venda.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-8 sm:mb-10">
            Experiência Profissional
          </p>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/60 via-blue-900/30 to-transparent hidden sm:block" />

          <div className="space-y-4 sm:pl-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.role + exp.period} delay={i * 100} direction="left">
                <div
                  className={`relative group rounded-2xl p-5 sm:p-6 transition-all duration-300
                    bg-gradient-to-br from-white/5 to-blue-950/20
                    border hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5
                    ${exp.current
                      ? "border-blue-500/40 shadow-sm shadow-blue-500/10"
                      : "border-white/8 hover:border-blue-800/40"
                    }`}
                >
                  <div className={`absolute -left-[2.85rem] top-6 w-3 h-3 rounded-full border-2 hidden sm:block
                    ${exp.current ? "bg-emerald-400 border-emerald-400 shadow-sm shadow-emerald-400/50" : "bg-[#030d2e] border-blue-700"}`}
                  />

                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] tracking-wider uppercase rounded-full px-2.5 py-1 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Atual
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-semibold text-white text-sm sm:text-base leading-snug group-hover:text-blue-200 transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-xs whitespace-nowrap flex-shrink-0 mt-0.5 ${exp.current ? "text-emerald-400" : "text-gray-500"}`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-blue-400 text-sm font-medium mb-3">{exp.company}</p>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
