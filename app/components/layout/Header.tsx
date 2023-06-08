"use client";

import { getCart } from "@/lib/swell/cart";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartSlider from "../CartSlider";

function Header() {
  const { isLoading, data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className=" border-b border-lime-900/20 p-5 fixed inset-x-0 bg-white z-10 ">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-10 items-center">
            <div>
              <Image src={"/leaf.png"} alt="logo" width={40} height={40} />
            </div>

            <ul className="flex gap-10">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/stores"}>Stores</Link>
              </li>
            </ul>
          </div>

          <ul className="flex gap-5 items-center">
            <button>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button>
              <UserIcon className="h-5 w-5" />
            </button>
            <div className="border-l">
              {!isLoading && (
                <button
                  className="px-4 py-2 flex items-center gap-2"
                  onClick={() => setIsCartOpen((prev) => !prev)}
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  {cart?.item_quantity ? (
                    <span className=" text-lg">{cart?.item_quantity}</span>
                  ) : null}
                </button>
              )}
            </div>
          </ul>
        </nav>
      </header>
      <CartSlider
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartIsLoading={isLoading}
        cart={cart!}
      />
    </>
  );
}

export default Header;
