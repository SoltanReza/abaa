"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { apiFetch, baseUrl } from "@/utils/apiFetch";

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await apiFetch("/partners?populate=*", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        console.log(
          baseUrl + data.data[0].attributes.photo.data.attributes.url
        );
        setPartners(data.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="bg-brand-green text-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Nos Partenaires</h2>
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

        <div className="flex  justify-center items-center flex-wrap gap-4">
          {partners.map((partner: any) => (
            <div className="text-center font-bold text-2xl text-white">
              <img
                key={partner.attributes.id}
                src={baseUrl + partner.attributes.photo.data.attributes.url}
                width={128}
                height={128}
                alt={partner.attributes.name}
                className="hexagon-logo rounded-full overflow-hidden"
              />
              <p>{partner.attributes.name}</p>
            </div>
          ))}
        </div>
        {/* Repeat for awards */}
      </div>
    </div>
  );
}
