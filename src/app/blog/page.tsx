"use client";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/blogCard";
import HeroSection from "../components/hero-section/heroSection";
import { apiFetch } from "@/utils/apiFetch";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiFetch("/posts?poplulate=*", { method: "GET" })
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
      <div className="flex flex-wrap justify-center items-center">
        {posts &&
          posts.map((post: any) => <BlogCard key={post.id} content={post} />)}
      </div>
    </main>
  );
}
