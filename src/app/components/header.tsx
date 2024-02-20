// components/Header.js
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo on the left */}
          <div>
            <Link className="flex items-center" href="/">
              {/* Replace with your own logo */}
              <Image src="/logo.jpg" alt="Logo" width={72} height={48} />
              <span className="ml-2 text-xl font-bold text-brand-green">
                Aba'a association
              </span>
            </Link>
          </div>

          {/* Right side navigation */}
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  href="/docs"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  href="/components"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              {/* Add more nav items here */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
