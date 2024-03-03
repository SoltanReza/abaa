"use client";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";

export default function BlogPost() {
  const [content, setContent] = useState<any>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/posts/${id}?populate=*`
        );
        const data = await response.json();
        console.log(data);
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
              src={`http://localhost:1337${content.cover.data.attributes.url}`}
              alt="Blog Post Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className=" mt-8">
              {content && <BlocksRenderer content={content.content} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
