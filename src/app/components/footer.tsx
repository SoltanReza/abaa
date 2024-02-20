// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-brand-green mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold">
              Parsley
            </a>
          </div>
          <div className="flex w-1/4 items-center justify-between">
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
        <div className="text-center pt-4 border-t border-gray-700 mt-4">
          <p>© {new Date().getFullYear()} Parsley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
