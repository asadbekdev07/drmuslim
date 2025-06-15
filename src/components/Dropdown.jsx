import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const Dropdown = ({title, items}) => {
  return (
    <li className="relative group">
      <a className="flex items-center gap-1" href="#" role="button" aria-haspopup="true" aria-expanded="false" onClick={(e) => e.preventDefault()}>
        {title}
        <ChevronDownIcon className="w-5 h-5 transform transition duration-200 group-hover:rotate-180" />
      </a>

      <ul className="absolute left-0 top-full mt-2 primary-color shadow-md rounded w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
        {items.map((item, index) => (
          <li key={index}>
          <a
            className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
            href={item.href || "#"} role="button" aria-haspopup="true" aria-expanded="false" 
          >
            {item.label}
          </a>
        </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
