import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-8">Sobre Mim</p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          <FadeIn direction="left" delay={100}>
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/kauan.jpeg"
                  alt="Kauan Mizael de Oliveira"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <FadeIn delay={150}>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-snug">
                Atuo no desenvolvimento e expansão de projetos comerciais, com foco em{" "}
                <span className="text-blue-400">
                  parcerias estratégicas, franquias e crescimento estruturado
                </span>{" "}
                de operações.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-sm sm:text-base">
                Tenho experiência em todo o processo comercial, desde prospecção e qualificação de
                oportunidades até negociação, fechamento e gestão de carteira, sempre com foco em
                previsibilidade, eficiência e escala.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <p className="text-sm sm:text-base">
                Possuo um perfil analítico, organizado e orientado a resultados, com facilidade para
                estruturar fluxos comerciais, acompanhar indicadores e conduzir negociações B2B de
                forma estratégica e profissional.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-sm sm:text-base">
                Atualmente, curso Bacharelado em Administração, complementando minha atuação prática
                com uma base sólida em gestão. Mantenho uma postura constante de aprendizado contínuo,
                buscando evolução profissional e atualização de mercado.
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="text-sm sm:text-base italic text-gray-400 border-l-2 border-blue-500 pl-4">
                O mercado tem evoluído constantemente com o avanço tecnológico e eu sempre tenho
                buscado o conhecimento para evoluir junto, quem sabe até olhar à frente do mercado!
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-sm sm:text-base font-semibold text-white">
                Estou aberto a somar com empresas e projetos que buscam crescimento estruturado. Vamos
                conversar — podem surgir diversas oportunidades.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
