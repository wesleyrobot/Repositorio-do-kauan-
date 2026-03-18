import EducationCard from "./EducationCard";
import FadeIn from "./FadeIn";

const academic = [
  { title: "Bacharelado em Administração", institution: "Anhanguera", period: "2025 — 2029", current: true },
  { title: "Ensino Médio Completo", institution: "E.E Carlos Alberto Galhiego", period: "2024", current: false },
];

const courses = [
  { title: "Gestão de Vendas B2B", institution: "Wingsales", period: "2026" },
  { title: "Aprendizagem Profissional em Comércio", institution: "Senac", period: "2024" },
  { title: "Fundamentos de I.A. aplicada a negócios", institution: "Online", period: "2024" },
];

export default function Education() {
  return (
    <section id="formacao" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-10">

        <div>
          <FadeIn>
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">Formação Acadêmica</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academic.map((a, i) => (
              <FadeIn key={a.title} delay={i * 100}>
                <EducationCard {...a} type="academic" />
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn>
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">Cursos Complementares</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((c, i) => (
              <FadeIn key={c.title} delay={i * 100}>
                <EducationCard title={c.title} institution={c.institution} period={c.period} type="course" />
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
