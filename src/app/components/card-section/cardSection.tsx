import Image from "next/image";

type CardSectionProps = {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
};
export default function CardSection({
  title,
  description,
  img,
}: CardSectionProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 m-auto">
      <div className="flex w-full md:w-1/2 justify-center items-center mb-4 md:mb-0">
        <Image
          src={img.src}
          alt="Logo"
          width={500}
          height={100}
          className="max-w-xs md:max-w-none"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-16">
        <h3 className="font-bold text-lg md:text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
