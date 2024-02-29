import ContentSection from "../components/content/contentSection";
import HeroSection from "../components/hero-section/heroSection";
import ServiceSection from "../components/service-section/service-section";

export default function Services() {
  return (
    <>
      <HeroSection
        title="Nos Services"
        description="Un Soutien Sur-Mesure Pour Chaque Besoin"
        image={{
          src: "/logo.jpg",
          title: "Services",
          width: 240,
          height: 240,
        }}
      />
      <ContentSection>
        <h3> Les Services et formations de Aba'a</h3>
        <p>
          Bienvenue sur notre page des services de [Nom de l'Association], où
          notre mission est de fournir un soutien adapté et efficace à ceux qui
          en ont le plus besoin. Notre association s'engage à offrir une gamme
          complète de services conçus pour répondre aux divers défis rencontrés
          par les individus et les familles en difficulté. Découvrez comment
          nous pouvons vous aider à surmonter les obstacles et à trouver des
          solutions durables pour une vie meilleure.
        </p>
      </ContentSection>
      <ServiceSection />
    </>
  );
}
