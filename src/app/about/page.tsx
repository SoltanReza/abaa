"use client";
import React from "react";
import ContentSection from "../components/content/contentSection";
import HeroSection from "../components/hero-section/heroSection";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import styles for pagination
import { Autoplay, Pagination } from "swiper/modules";
import TeamMembers from "../components/team-members/page";
const AboutUs: React.FC = () => {
  const images = ["/about-us-1.jpeg", "/about-us-2.jpeg", "/about-us-3.jpeg"];
  return (
    <>
      <HeroSection
        title="A propos d'association Abaa"
        description="Nos formations etc..."
        image={{
          src: "about-us.svg",
          title: "A propos de Abaa",
          height: 256,
          width: 256,
        }}
      />
      <ContentSection>
        <h3>Ouvrir des Horizons, Transformer des Vies</h3>
        <p>
          Dans un monde où les défis semblent parfois insurmontables,
          l'association Aba'a se dresse comme un phare d'espoir pour ceux
          confrontés à des difficultés. Fondée sur la conviction profonde que
          l'éducation est la clé de la résilience et de la réinvention de soi,
          Aba'a offre des formations sur mesure pour les individus en situation
          de vulnérabilité.
        </p>
        <p>
          Chez Aba'a, nous croyons en la puissance de l'apprentissage pour non
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
        <p>
          À Aba'a, nous sommes plus qu'une association ; nous sommes une
          communauté solidaire, unie par le désir de voir chacun de nos membres
          s'épanouir et réussir. Rejoignez-nous dans cette mission : ensemble,
          nous pouvons transformer des vies et bâtir un avenir prometteur pour
          tous.
        </p>

        <Image
          src="/about-us-1.jpeg"
          alt="helping people"
          className="m-auto"
          width={800}
          height={600}
        />

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam,
          possimus architecto temporibus nemo beatae maiores, aspernatur
          perferendis, exercitationem sapiente incidunt qui? A doloribus qui
          quam, deleniti illum non quisquam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam assumenda earum, numquam doloribus
          perspiciatis tenetur consectetur vel. Temporibus nostrum, asperiores
          illum aliquam, quasi delectus perspiciatis non vel cumque, itaque
          earum?
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LXb3EKWsInQ?si=5VBpqIhFdq7pfnWA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="m-auto my-8"
        ></iframe>
      </ContentSection>

      <TeamMembers />
    </>
  );
};

export default AboutUs;
