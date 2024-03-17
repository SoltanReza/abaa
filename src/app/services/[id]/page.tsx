"use client";
import HeroSection from "../../components/hero-section/heroSection";
import ServiceSection from "../../components/service-section/service-section";
import TeamMembers from "../../components/team-members/teamMembers";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ContentSection from "@/app/components/content/contentSection";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  // Add more data as needed
];
export default function Service() {
  const [content, setContent] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetch(`/services/${id}?populate=*`, {
          method: "GET",
        });
        const data = await response.json();
        setContent(data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main>
      {content && (
        <>
          <HeroSection
            title={content.title}
            description={content.description}
            image={{
              src: baseUrl + content.photo.data.attributes.url,
              title: "ABAA logo",
              height: 256,
              width: 256,
            }}
            btn1={
              content.file.data
                ? {
                    title: "Telecharger les infos",
                    address: baseUrl + content.file.data.attributes.url,
                  }
                : undefined
            }
          />

          <ContentSection>
            <BlocksRenderer content={content.content} />
          </ContentSection>
        </>
      )}
      <TeamMembers />

      <ServiceSection />
    </main>
  );
}
