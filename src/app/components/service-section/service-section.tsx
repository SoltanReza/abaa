// components/ServiceSection.js

import Image from "next/image";

const services = [
  {
    title: "OPTIMIZE YOUR PROCESSES!",
    description:
      "You will get a free personal manager who will help to build a strategy, optimize the budget and deadline, organize the development process and launch the project.",
    image: "/logo.jpg", // Replace with your own image path
  },
  {
    title: "ACCELERATE YOUR REVENUE!",
    description:
      "200+ years of cumulative team experience. No matter the industry, business goals, or location to turn your requirements into the profitable solution.",
    image: "/logo.jpg", // Replace with your own image path
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
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
