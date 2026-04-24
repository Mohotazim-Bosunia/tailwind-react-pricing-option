import React, { useState } from "react";
import Link from "./Link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];
const links = navItems.map((route) => <Link route={route}></Link>);
const Navber = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between mx-10">
      <span onClick={() => setOpen(!open)} className="flex">
        {open ? (
          <IoClose className="w7 h-7 md:hidden"></IoClose>
        ) : (
          <IoMenu className="w7 h-7 md:hidden"></IoMenu>
        )}

        <ul className="md:hidden">{links}</ul>
        <h3 className="ml-3">My NavBar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>

      {/* <ul className="flex">
        {navItems.map((route) => (
          <li className="mr-5">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className="flex">
        <li className="mr-5">
          <a href="/">Home</a>
        </li>
        <li className="mr-5">
          <a href="/about">About</a>
        </li>
        <li className="mr-5">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
      <button>Sing In</button>
    </nav>
  );
};

export default Navber;
