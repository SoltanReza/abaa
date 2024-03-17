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
          src: "/images/image.jpg",
          title: "Services",
          width: 150,
          height: 150,
        }}
      />
      <ContentSection>
        <h3> Les Services et formations de ABA'A</h3>
        <p>
          Bienvenue sur notre page des services de ABA'A, où notre mission est
          de fournir un soutien adapté et efficace à ceux qui en ont le plus
          besoin. Notre association vise à offrir progressivement une gamme
          complète de services conçus pour répondre aux divers défis rencontrés
          par les personnes et les familles en difficulté. Découvrez comment
          nous pouvons vous aider à surmonter les obstacles et à trouver des
          solutions durables pour une vie meilleure.
        </p>
      </ContentSection>
      <ServiceSection />
    </>
  );
}
