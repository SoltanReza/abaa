// components/HeroSection.js
import Image from "next/image";
import { ReactNode } from "react";

type HeroSectionProps = {
  title: ReactNode;
  span?: ReactNode;
  description: ReactNode;
  btn1?: { title: string; address: string };
  btn2?: { title: string; address: string };
  image?: {
    title: string;
    width?: number;
    height?: number;
    src: string;
    layout?: string;
  };
};

const HeroSection = ({
  title,
  span,
  description,
  btn1,
  btn2,
  image,
}: HeroSectionProps) => {
  return (
    <div className="flex justify-center items-center p-16 bg-brand-green text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex-1">
        <div className="flex w-full justify-center flex-col relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{title}</span>{" "}
                <span className="block text-yellow-500 xl:inline">{span}</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {btn1 && (
                  <div className="rounded-md shadow">
                    <a href={btn1?.address} className="btn-primary">
                      {btn1?.title}
                    </a>
                  </div>
                )}
                {btn2 && (
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href={btn2?.address} className="btn">
                      {btn2?.title}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex-1">
        <Image
          className="w-full object-contain sm:h-72"
          src={image?.src || ""}
          alt={image?.title || ""}
          layout={image?.layout || ""}
          width={image?.layout == "fill" ? undefined : image?.width}
          height={image?.layout == "fill" ? undefined : image?.height}
        />
      </div>
    </div>
  );
};

export default HeroSection;
