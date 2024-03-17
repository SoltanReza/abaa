"use client";
import { apiFetch } from "@/utils/apiFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import AlertDialog from "./dialog/dialog";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  const [services, setServices] = useState([]);
  const [email, setEmail] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    apiFetch("/newsletters", {
      method: "POST",
      body: JSON.stringify({ data: { email } }),
    })
      .then((res) => {
        if (res.status === 200) {
          setOpenDialog(true);
        } else {
          alert("An error occurred");
        }
      })
      .catch((err) => {
        alert("An error occurred");
      });
  };

  useEffect(() => {
    apiFetch("/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        data.data = data.data.slice(0, 3);
        setPosts(data.data);
      })
      .catch((error) => console.error(error));
    apiFetch("/services", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setServices(data.data);
      });
    });
  }, []);

  return (
    <footer className="bg-gray-100 text-brand-green">
      <AlertDialog
        title="Votre mail à bien été enregistré"
        description="Merci pour votre confiance"
        buttonText="d'accord"
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
      />
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <a
              href="/"
              className="flex items-center justify-center text-xl font-bold"
            >
              <Image
                src="/logo-text.png"
                width={168}
                height={64}
                alt="ABA'A logo"
                className="mr-2"
              />
            </a>
            <div className="flex flex-col my-4 text-black text-sm">
              <h2>Rejoignez notre newsletter</h2>
              <p className="mb-0">
                Inscrivez-vous pour recevoir les dernières nouvelles et mises à
                jour
              </p>
              <form className="flex mt-4 md:mt-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input mr-4"
                />
                <button onClick={handleSubmit} type="button" className="btn-xs">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex  w-full md:w-1/2 justify-between flex-wrap text-sm">
            <div className="flex flex-col w-full md:w-auto items-center justify-between  mb-6 md:mb-0">
              {posts &&
                posts.map((post: any, index) => (
                  <div key={index} className="w-full mb-2 md:mb-0">
                    <a href={`/blog/${post.id}`} className="hover:text-black">
                      {post.attributes.title}
                    </a>
                  </div>
                ))}
            </div>

            <div className="flex flex-wrap flex-col w-full md:w-auto items-center justify-between ">
              {services &&
                services.map((service: any, index) => (
                  <div key={index} className="w-full mb-2 md:mb-0">
                    <a
                      href={`/services/${service.id}`}
                      className="hover:text-black"
                    >
                      {service.attributes.title.slice(0, 30) + "..."}
                    </a>
                  </div>
                ))}
            </div>

            <div className="flex  flex-col w-full md:w-auto items-center justify-between ">
              <div className="w-full mb-2 md:mb-0">
                <a href="/about" className="hover:text-black">
                  À propos
                </a>
              </div>
              <div className="w-full mb-2 md:mb-0">
                <a href="/contact" className="hover:text-black">
                  Nous contacter
                </a>
              </div>
              <div className="w-full mb-2 md:mb-0">
                <a href="/services" className="hover:text-black">
                  Nos Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 border-t border-gray-700 mt-4">
          <p>© {new Date().getFullYear()} Parsley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
