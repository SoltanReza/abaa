import { Content } from "next/font/google";
import ContentSection from "../components/content/contentSection";
import HeroSection from "../components/hero-section/heroSection";
import ServiceSection from "../components/service-section/service-section";
import CustomTable from "../components/table/table";
import TeamMembers from "../components/team-members/page";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  // Add more data as needed
];
export default function Service() {
  return (
    <main className=" ">
      <HeroSection
        title="
        Formation d'accompagnement aux familles"
        description="Programme de formation"
        image={{
          src: "/main-help.svg",
          title: "ABAA logo",
          height: 256,
          width: 256,
        }}
        btn1={{ title: "Telecharger les infos", address: "/file.docx" }}
      />
      <ContentSection>
        <h3>Public visé par la formation et prérequis</h3>
        <p>
          Il n’y a pas de prérequis nécessaire pour se présenter aux épreuves
          d’admission relatives à la formation préparant au Titre
          d’Accompagnants Aux Familles. Les candidats doivent déposer un dossier
          de demande d’admission, passer les épreuves d’admission et obtenir des
          résultats suffisants pour accéder à la formation.
        </p>
        <p>
          Peuvent être candidats à la formation :
          <ul className="list-disc p-8">
            <li>Les candidats en formation initiale</li>
            <li>
              Les candidats au titre de la formation continue, les personnes
              déjà engagées dans la vie active ou qui s’y engagent, les salariés
              ayant un emploi dans le secteur du médico-social (formation en
              alternance) ainsi que les personnes en reconversion ou les
              demandeurs d’emploi
            </li>
          </ul>
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LXb3EKWsInQ?si=5VBpqIhFdq7pfnWA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="m-auto mb-8"
        ></iframe>

        <p>
          Dans le cadre de ses missions, en lien avec les aidants et les
          familles, il participe à l'élaboration et la mise en œuvre d'un
          accompagnement adapté à la situation de la personne, de ses besoins,
          de ses souhaits, et de ses droits. Il établit une relation de
          proximité, en fonction des capacités de la personne dans toutes ses
          dimensions (physiques, physiologiques, cognitives, psychologiques, et
          sociales). Il soutient et favorise la communication et l'expression de
          la personne qu'elle soit verbale ou non verbale.
        </p>
      </ContentSection>

      <TeamMembers />
      <ContentSection>
        <h3>Les resultats des derniers formations</h3>
        <p> Un exemple de texte</p>
        <CustomTable data={data} />
      </ContentSection>
      <ServiceSection />
    </main>
  );
}
