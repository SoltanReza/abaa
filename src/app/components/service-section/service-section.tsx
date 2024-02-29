// components/ServiceSection.js

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Positionnement professionnel",
    description:
      "avec une focalisation sur l'éthique, la déontologie, et la qualité de vie au travail.",
    image: "/work.svg", // Replace with your own image path
  },
  {
    title:
      "Accompagnement aux actes et aux gestes essentiels de la vie quotidienne",
    description:
      "couvrant l'alimentation, l'habillement, l'hygiène, et le bien-être.",
    image: "/deliveries.svg", // Replace with your own image path
  },
];

const ServiceSection = () => {
  const columnCount = 2; // Number of columns

  // Calculate the number of services per column
  const servicesPerColumn = Math.ceil(services.length / columnCount);

  // Split the services into columns
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    const startIndex = i * servicesPerColumn;
    const endIndex = startIndex + servicesPerColumn;
    const columnServices = services.slice(startIndex, endIndex);
    columns.push(columnServices);
  }

  return (
    <div className="bg-brand-green text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="flex">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="w-1/2">
              {column.map((service, index) => (
                <div key={index} className="flex items-center mb-8">
                  <Image
                    width={168}
                    height={168}
                    alt=""
                    src={service.image}
                    className="w-1/3"
                  />
                  <div className="w-2/3 ml-8">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                    <div className="w-1/2 ">
                      <Link href="/service" className="btn">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="transition ease-in-out hover:text-brand-purple"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
