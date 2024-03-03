import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ content }: any) {
  const post = content.attributes;
  return (
    <div className="rounded-2xl m-8 w-1/4 border shadow">
      <Image
        className="w-full max-h-56"
        src="/blog-post.svg"
        alt="Logo"
        width={256}
        height={90}
      />
      <div className="flex flex-col my-4 p-6">
        <h5 className="text-2xl font-bold">{post.title}</h5>
        <p className="overflow-clip">{post.description}</p>
        <Link href={`/blog/${content.id}`} className="btn-sm self-end">
          Read more...
        </Link>
      </div>
    </div>
  );
}
