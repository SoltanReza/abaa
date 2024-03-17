"use client";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/blogCard";
import HeroSection from "../components/hero-section/heroSection";
import { apiFetch } from "@/utils/apiFetch";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiFetch("/posts?populate=*", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <HeroSection
        title="Évenement et nouvelles"
        description=""
        image={{
          title: "Blog",
          src: "/blog-post.svg",
          height: 128,
          width: 128,
        }}
      />
      <div className="flex flex-wrap -mx-4 justify-center items-center">
        {posts &&
          posts.map((post: any) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              key={post.id}
            >
              <BlogCard content={post} />
            </div>
          ))}
      </div>
    </main>
  );
}
