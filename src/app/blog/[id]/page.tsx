"use client";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import ContentSection from "@/app/components/content/contentSection";

export default function BlogPost({ params }: any) {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetch(`/posts/${params.id}?populate=*`, {
          method: "GET",
        });
        const data = await response.json();
        setContent(data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {content && (
        <div className="max-w-4xl w-full px-5">
          <h3 className="text-3xl font-semibold">{content.title}</h3>
          <img
            src={baseUrl + content.cover.data.attributes.url}
            alt="Blog Post Image"
            className="w-full h-auto rounded-lg shadow-lg my-4"
          />
          <ContentSection>
            <BlocksRenderer content={content.content} />
          </ContentSection>
        </div>
      )}
    </div>
  );
}
