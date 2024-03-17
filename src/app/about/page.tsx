"use client";
import React, { useEffect, useState } from "react";
import ContentSection from "../components/content/contentSection";
import HeroSection from "../components/hero-section/heroSection";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import styles for pagination
import { Autoplay, Pagination } from "swiper/modules";
import TeamMembers from "../components/team-members/teamMembers";
import ReactPlayer from "react-player";
import { apiFetch } from "@/utils/apiFetch";
const AboutUs: React.FC = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    apiFetch("/videos?filters[type][$eq]=a-propos", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setVideo(data.data[0].attributes.url);
        });
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);
  const images = ["/about-us-1.jpeg", "/about-us-2.jpeg", "/about-us-3.jpeg"];
  return (
    <>
      <HeroSection
        title="A propos d'association ABA'A"
        description="Nos services , formations et accompagnements à domicile et acceuil en centre"
        image={{
          src: "/images/hero2.jpeg",
          title: "A propos de Abaa",
          height: 256,
          width: 256,
        }}
      />
      <ContentSection>
        <h3>Ouvrir des Horizons, Transformer des Vies</h3>
        <p>
          Dans un monde où les défis semblent parfois insurmontables,
          l'association ABA'A se dresse comme un phare d'espoir pour ceux
          confrontés à des difficultés. Fondée sur la conviction profonde que
          l'éducation est la clé de la résilience et de la réinvention de soi,
          ABA'A offre des formations sur mesure pour les individus en situation
          de vulnérabilité.
        </p>
        <p>
          Chez ABA'A, nous croyons en la puissance de l'apprentissage pour non
          seulement surmonter les obstacles, mais aussi pour ouvrir des portes
          vers de nouvelles opportunités. Nos programmes sont conçus pour
          équiper nos bénéficiaires des compétences nécessaires pour naviguer
          dans les complexités de la vie moderne, tout en renforçant leur
          confiance en leurs propres capacités.
        </p>
        <p>
          Nos formations couvrent une vaste gamme de sujets, des compétences
          numériques essentielles à la gestion financière, en passant par le
          développement personnel et professionnel. Chaque parcours est adapté
          pour répondre aux besoins spécifiques de nos apprenants, les aidant à
          tracer leur propre voie vers le succès.
        </p>

        <Image
          src="/about-us-1.jpeg"
          alt="helping people"
          className="m-auto"
          width={800}
          height={600}
        />

        <p className="my-8">
          À ABA'A, nous sommes plus qu'une association ; nous sommes une
          communauté solidaire, unie par le désir de voir chacun de nos membres
          s'épanouir et réussir. Rejoignez-nous dans cette mission : ensemble,
          nous pouvons transformer des vies et bâtir un avenir prometteur pour
          tous.
        </p>

        {video && (
          <div className="mb-16 m-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <ReactPlayer url={video} controls width="100%" />
          </div>
        )}
      </ContentSection>

      <TeamMembers />
    </>
  );
};

export default AboutUs;
