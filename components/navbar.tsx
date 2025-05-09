"use client";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import Image from "next/image";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F2E2B1] shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="hover:text-[#BDB395]">
            <div className="flex gap-2 items-center">
              <Image
                src="/logo.svg"
                width={20}
                height={10}
                alt="Picture of the author"
              />
              <span className="mt-1 font-extrabold text-lg ">Ecommerce</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link href="/" className="hover:text-[#BDB395]">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#BDB395]">
              Products{" "}
            </Link>
            <Link href="/checkout" className="hover:text-[#BDB395]">
              Checkout
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/checkout" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#BDB395] text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="md:hidden bg-[#F6F0F0] shadow-md">
            <ul className="flex flex-col p-4 space-y-2 font-bold">
              <li className="flex justify-center">
                <Link href="/" className="block hover:text-[#BDB395]">
                  Home
                </Link>
              </li>
              <li className="flex justify-center">
                <Link href="/products" className="block hover:text-[#BDB395]">
                  Products
                </Link>
              </li>
              <li className="flex justify-center">
                <Link href="/checkout" className="block hover:text-[#BDB395]">
                  Checkout
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </>
  );
};
