"use client";
import Image from "next/image";
import HeroSection from "./components/hero-section/heroSection";
import CardSection from "./components/card-section/cardSection";
import ServiceSection from "./components/service-section/service-section";
import AboutSection from "./components/aboutSection";
import NewsletterSection from "./components/newsletter-section/newsLetterSection";
import Calendar from "./components/calendar/calendar";
import PartnersSection from "./components/partnerSection/partnersSection";
import TeamMembers from "./components/team-members/teamMembers";
import ReactPlayer from "react-player";
import PhotoGallery from "./components/gallery/gallery";
import { useEffect, useState } from "react";
import { apiFetch } from "@/utils/apiFetch";

export default function Home() {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    apiFetch("/videos?filters[type][$eq]=acceuil", {
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

  return (
    <main className=" ">
      <HeroSection
        title="Ensemble accompagnons
        nos bien-aimés"
        description="Unis pour enrichir chaque instant partagé avec ceux qui nous sont chers."
        image={{
          src: "/images/hero1.jpeg",
          title: "ABAA logo",
          height: 256,
          width: 256,
        }}
        btn1={{ title: "Nos services", address: "/services" }}
        btn2={{ title: "Notre blog", address: "/blog" }}
      />
      <AboutSection />
      {video && (
        <div className="mb-16 m-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <ReactPlayer url={video} controls width="100%" />
        </div>
      )}
      <Calendar />
      <ServiceSection />
      <NewsletterSection />

      <CardSection
        title="Quelle est l'importance de notre mission"
        description="Notre mission revêt une importance capitale car elle vise à apporter soutien et espoir aux individus les plus vulnérables de notre société. En mettant l'accent sur l'accompagnement,le développement et le mentien de l'autonomie, nous œuvrons non seulement à améliorer la qualité de vie de nos bénéficiaires, mais également à construire une communauté plus solidaire et inclusive. Chaque pas que nous entreprenons est un pas vers un avenir où chacun est valorisé, soutenu et vers une prise en charge globale et adaptée de nos bien aimés."
        img={{ src: "/images/aider1.jpeg", alt: "Aider aquelqu'un" }}
      />
      <PhotoGallery />
      <PartnersSection />
      <TeamMembers />
    </main>
  );
}
