"use client";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    try {
      apiFetch("/services?populate=*", { method: "GET" })
        .then((res) => {
          res.json().then((data) => {
            setServices(data.data);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="bg-brand-green text-white p-2">
      <h4 className="text-2xl text-center font-bold mt-4">Nos services</h4>
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-wrap -mx-4">
          {services.map((service: any, index) => (
            <div
              key={index}
              className="px-4 w-full lg:w-1/2 flex flex-col lg:flex-row items-center mb-8"
            >
              <Image
                width={168}
                height={168}
                alt=""
                src={baseUrl + service.attributes.photo.data.attributes.url}
                className="w-full lg:w-1/3 mb-4 lg:mb-0"
              />
              <div className="w-full lg:w-2/3 lg:ml-8">
                <h3 className="text-xl font-semibold mb-2">
                  {service.attributes.title}
                </h3>
                <p>{service.attributes.description}</p>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                  <Link className="btn" href={`/services/${service.id}`}>
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            className="transition ease-in-out hover:text-brand-purple"
            href="/contact"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
