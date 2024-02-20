import Image from "next/image";

export default function AboutSection() {
  return (
    <div className=" text-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">ABOUT Parsley Dev</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            blanditiis magnam voluptates molestiae illo amet. Voluptatum
            voluptates deleniti sunt vero consectetur modi eius fuga sed.
            Repudiandae corporis reprehenderit dignissimos sint!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae
            nesciunt, optio dolore veniam perspiciatis unde ab aliquam quasi
            corrupti facere consequuntur? Aliquid deserunt fuga ipsam sint et
            laudantium quod.
          </p>
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">WHAT OUR CLIENTS SAY</h3>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Image
            src="/logo.jpg"
            width={128}
            height={128}
            alt="Parsley"
            className="hexagon-logo"
          />
          {/* Repeat for other logos */}
        </div>
        {/* Repeat for awards */}
      </div>
    </div>
  );
}
