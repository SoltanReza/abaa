"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import styles for pagination
import { Autoplay, Pagination } from "swiper/modules";
const photos = [
  // Add your photo URLs here
  { id: 1, url: "/images/aider1.jpeg" },
  { id: 2, url: "/images/hero1.jpeg" },
  { id: 3, url: "/images/1.jpeg" },
  { id: 4, url: "/images/2.jpeg" },
  { id: 5, url: "/images/3.jpeg" },
  { id: 6, url: "/images/4.jpeg" },
  { id: 7, url: "/images/5.jpeg" },
  { id: 8, url: "/images/6.jpeg" },
  { id: 9, url: "/images/7.jpeg" },
  { id: 10, url: "/images/8.jpeg" },

  // Add up to 10 photos
];

const PhotoGallery = () => {
  return (
    <Swiper
      spaceBetween={30} // Adjust space between slides
      slidesPerView={1} // Default: show 1 slide at a time on smaller screens
      breakpoints={{
        // Screens >= 480 pixels
        480: {
          slidesPerView: 3, // Show 2 slides per view on small screens
        },
        // Screens >= 768 pixels (tablets)
        768: {
          slidesPerView: 4, // Show 3 slides per view on medium screens
        },
        // Screens >= 1024 pixels (desktops)
        1024: {
          slidesPerView: 5, // Show 4 slides per view on large screens
        },
        // Screens >= 1440 pixels (large desktops)
        1440: {
          slidesPerView: 5, // Show 5 slides per view on extra-large screens
        },
      }}
      className="w-full my-4"
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {photos.map((photo: any) => (
        <>
          <SwiperSlide key={photo.id}>
            <img src={photo.url} style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
