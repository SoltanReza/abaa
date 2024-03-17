import { baseUrl } from "@/utils/apiFetch";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ content }: any) {
  const post = content.attributes;
  return (
    // Adjust the card width and max-width for different screen sizes
    <div className="rounded-2xl my-4 mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl border shadow overflow-hidden">
      {/* Ensure the Image component fills the width and maintains aspect ratio */}
      <div className="relative w-full h-56">
        {" "}
        {/* Control the height to maintain aspect ratio */}
        <Image
          src={baseUrl + post.cover.data.attributes.url}
          alt={post.title}
          layout="fill" // Use 'fill' to make the image cover the designated area
          objectFit="contain" // Cover the area without losing aspect ratio
        />
      </div>
      <div className="flex flex-col my-4 p-6">
        <h5 className="text-2xl font-bold">{post.title}</h5>
        <p className="overflow-clip">{post.description}</p>
        <Link className="btn-sm" href={`/blog/${content.id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
}
