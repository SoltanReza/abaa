"use client";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useParams, useRouter } from "next/navigation";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import ContentSection from "@/app/components/content/contentSection";

export default function BlogPost() {
  const [content, setContent] = useState<any>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetch(`/posts/${id}?populate=*`, {
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
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {content && (
          <div className="w-4/5 px-5">
            <h3>{content.title}</h3>
            <img
              src={baseUrl + content.cover.data.attributes.url}
              alt="Blog Post Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <ContentSection>
              {content && <BlocksRenderer content={content.content} />}
            </ContentSection>
          </div>
        )}
      </div>
    </>
  );
}
