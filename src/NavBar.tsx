import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useLocation } from "react-router-dom";

const NavBar = ({ activeSection }: { activeSection: string }) => {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");

  const sideDots = [
    { id: "about", label: "Dot to go to About section", color: "b" },
    { id: "projects", label: "Dot to go to Projects section", color: "w" },
    { id: "experience", label: "Dot to go to Experience section", color: "b" },
    { id: "contact", label: "Dot to go to Contact section", color: "w" },
  ];

  return (
    <div className="bg-w sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-[5%] md:px-20 lg:px-40 2xl:px-10">
        <div className="flex items-center justify-between w-full">
          <div className="py-4">
            <Link
              smooth
              to="/#about"
              aria-label="Go to the Home page"
              className="text-2xl font-semibold text-b">
              Julia Oprzondek
            </Link>
          </div>

          <Link
            smooth
            to="/#contact"
            className="sm:hidden"
            aria-label="Go to Contact section">
            <ContactsIcon sx={{ color: "rgba(41, 95, 209, 0.8)", mt: 0 }} />
          </Link>

          <nav className="hidden sm:flex sm:items-center">
            <Link
              smooth
              to="/#about"
              aria-label="Go to About section"
              className="!cursor-pointer text-[0.9rem] text-gray-900 hover:text-b ml-10 transition duration-300">
              About
            </Link>

            <Link
              smooth
              to="/#projects"
              aria-label="Go to Projects section"
              className="!cursor-pointer text-[0.9rem] text-gray-900 hover:text-b ml-10 transition duration-300">
              Projects
            </Link>

            <Link
              smooth
              to="/#experience"
              aria-label="Go to Experience section"
              className="!cursor-pointer text-[0.9rem] text-gray-900 hover:text-b ml-10 transition duration-300">
              Experience
            </Link>

            <Link
              smooth
              to="/#contact"
              aria-label="Go to Contact section"
              className="!cursor-pointer text-[0.9rem] text-gray-900 hover:text-b ml-10 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Side dots */}
      {!isBlogPage && (
        <div className="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col">
          {sideDots.map((dot) => (
            <Link
              key={dot.id}
              smooth
              to={`#${dot.id}`}
              aria-label={dot.label}
              className={`
                            block w-3 h-3 md:mb-4 mb-3 border-2  rounded-full transition duration-300 cursor-pointer
                            ${
                              activeSection === dot.id
                                ? `bg-${dot.color} border-${dot.color}`
                                : "border-b hover:border-gray-500"
                            }
                        `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
