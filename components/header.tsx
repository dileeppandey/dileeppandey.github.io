// components/Header.tsx
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="text-black fixed top-0 left-0 w-full bg-white text-white p-4 z-50 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="/images/profile.jpeg"
              alt="Logo"
              className="h-10 w-10 mr-2 rounded-full"
            />
          </Link>
        </div>

        {/* Site Title in the center */}
        <div className="text-2xl tracking-wider uppercase text-outline">
          Dileep Pandey
        </div>

        {/* Social Media Icons on the right */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/dileep-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dileeppandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/dileeppandey_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/dileep.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@dileep-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </header>
  );
}
