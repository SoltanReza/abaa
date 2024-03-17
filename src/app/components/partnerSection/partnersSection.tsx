"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import styles for pagination
import { Autoplay, Pagination } from "swiper/modules";
export default function PartnersSection() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await apiFetch("/partners?populate=*", {
          method: "GET",
        });
        const data = await response.json();
        setPartners(data.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="bg-brand-green text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Nos Partenaires</h2>
          <p className="text-left  mt-4">
            Nous tenons à exprimer notre profonde gratitude envers nos
            partenaires pour leur soutien essentiel et leur engagement à nos
            côtés. Votre contribution enrichit notre mission et amplifie notre
            impact. Merci de partager notre vision et de participer activement à
            notre succès commun.
          </p>
        </div>

        <Swiper
          spaceBetween={30} // Adjust space between slides
          slidesPerView={1} // Default: show 1 slide at a time on smaller screens
          breakpoints={{
            // Screens >= 480 pixels
            480: {
              slidesPerView: 2, // Show 2 slides per view on small screens
            },
            // Screens >= 768 pixels (tablets)
            768: {
              slidesPerView: 3, // Show 3 slides per view on medium screens
            },
            // Screens >= 1024 pixels (desktops)
            1024: {
              slidesPerView: 4, // Show 4 slides per view on large screens
            },
            // Screens >= 1440 pixels (large desktops)
            1440: {
              slidesPerView: 5, // Show 5 slides per view on extra-large screens
            },
          }}
          className="w-full"
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
        >
          {partners.map((partner: any) => (
            <>
              <SwiperSlide
                className="flex flex-col items-center text-sm bg-white rounded-2xl overflow-hidden shadow-lg"
                key={partner.attributes.id}
                style={{ width: "600px", height: "400px" }} // Define your fixed width and height here
              >
                <div className="w-full h-1/2">
                  <img
                    className="w-full h-full  object-contain" // Use object-cover to maintain aspect ratio without stretching the image
                    src={baseUrl + partner.attributes.photo.data.attributes.url}
                    alt={partner.attributes.name}
                  />
                </div>
                <div className="flex flex-col items-strat text-black justify-strat text-left p-4 h-1/2">
                  <h4 className="font-bold">{partner.attributes.name}</h4>
                  {/* Dynamic name */}
                  <p>{partner.attributes.description}</p>{" "}
                  {/* Dynamic description, align text center */}
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
