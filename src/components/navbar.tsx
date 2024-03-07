"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import uj_logo from "@/assets/uj_logo.svg";
import { usePathname } from "next/navigation";
import SearchModal from "./search-modal";
type Props = {};

const Links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },

  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/ressources",
    label: "Ressources",
  },
  {
    href: "/forum",
    label: "Discussion Forum",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

const Navbar = (props: Props) => {
  const path = usePathname();

  //hide the navbar on scroll up and show it on scroll down
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // if (path === "/login" || path === "/register") return null;
  if (path !== "/") return null;

  return (
    <nav
      style={{
        top: visible ? "0" : "-130px",
      }}
      className="navbar fixed top-0 z-50 bg-base-100 rounded-b-2xl transition-all duration-500"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {Links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link no-underline hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden flex-row items-center justify-center lg:flex">
          <Link href={"/"}>
            <Image
              src={uj_logo}
              width={180}
              height={180}
              alt="uj logo"
              className="min-h-[50px] min-w-[180px] w-auto h-auto"
            />
          </Link>
          <h1 className="text-md 700px:inline-flex hidden text-center font-bold ">
            Department of Industrial Psychology and People Management
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">
          {Links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="Í link no-underline hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <SearchModal />
        <Link href={"/login"} className="btn  btn-primary btn-outline">
          Login
        </Link>
        <Link href={"/register"} className="btn btn-secondary btn-outline">
          register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
