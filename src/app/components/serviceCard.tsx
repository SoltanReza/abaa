// components/ServiceCard.js

import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
};
const ServiceCard = ({ title, description, img }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-between   max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mt-4">
        <Image
          className="h-48 w-auto  rounded-md"
          src={img.src}
          alt={img.alt}
          width={48}
          height={48}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Learn More
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
