// components/Footer.js

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-brand-green mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full flex flex-col items-start justify-start md:w-auto mb-6 md:mb-0">
            <a
              href="/"
              className="flex  items-center justify-center text-xl font-bold"
            >
              <Image
                src="/logo.jpg"
                width={64}
                height={64}
                alt="Aba'a logo"
                className="mr-2"
              />
              Aba'a
            </a>
            <div className="flex flex-col my-4 text-black text-sm">
              <h2>Rejoignez notre newsletter</h2>
              <p className="mb-0">
                Inscrivez-vous pour recevoir les dernières nouvelles et mises à
                jour
              </p>
              <form className="flex" action="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input mrt -4"
                />
                <button type="button" className="btn-xs">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-between">
            <div className="flex w-full items-center justify-between font-bold">
              <div className="w-full">
                <a href="/about" className=" hover:text-black">
                  About Us
                </a>
              </div>
              <div className="w-full ">
                <a href="/contact" className=" hover:text-black">
                  Contact
                </a>
              </div>
              <div className="w-full ">
                <a href="/privacy" className=" w-full  hover:text-black">
                  Privacy Policy
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
