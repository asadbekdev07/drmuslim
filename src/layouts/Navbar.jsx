import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Dropdown from "../components/Dropdown";

const Navbar = () => {

  const aboutItems = [
    { label: "Dr. Muslim Botirqulov" },
    { label: "Bizning offis" },
    { label: "Rasmlar" },
  ];

  const serviceItems = [
    { label: "Tish tozalash" },
    { label: "Implant" },
    { label: "Rentgen" },
  ];

  const forPatients = [
    { label: "Savol-javoblar" },
    { label: "Ko'rsatmalar" },
    { label: "Narxlar" },
  ];

  return (
    <div className="primary-color fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container">
        <div className="p-8 flex items-center justify-between">
          <a
            className="font-pacifico text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-400 drop-shadow-lg"
            href="" role="button" aria-haspopup="true" aria-expanded="false"
          >
            DrMuslim.uz
          </a>

          <div className="flex items-center">
            <ul className="flex gap-6 mr-6">
              <Dropdown title="Biz haqimizda" items={aboutItems} />
              <Dropdown title="Xizmatlar" items={serviceItems} />
              <Dropdown title="Mijozlar uchun" items={forPatients} />
              
              <li>
                <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Biz bilan aloqa</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
