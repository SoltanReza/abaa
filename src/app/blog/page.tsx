"use client";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/blogCard";
import HeroSection from "../components/hero-section/heroSection";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <HeroSection
        title="Blog posts"
        description="Description for this page"
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
