"use client";

import { useContext } from "react";
import { useMyContext } from "../../context/MyContext";

import {
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
  CogIcon,
  TruckIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
];

const NavLinks = () => {
  const { value } = useMyContext();
  return (
    <div className=" flex  space-x-3 space-y-3  justify-between flex-row sm:flex-col justify-center ">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[40px] grow items-center space-between gap-2 rounded-md  p-5 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3 border-b-4 border-b-gray-50 bg-gray-50  "
          >
            <IconComponent className="w-6 " />
            <p className="hidden md:block">
              {link.name === "Cart" && value && value.length > 0
                ? `${link.name}(${value.length})`
                : `${link.name}`}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
