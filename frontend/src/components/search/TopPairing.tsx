"use client";

import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import { makasar, montserrat } from "@/fonts";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Pairing } from "@/types";
import { Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function TopPairing({ pairing }: { pairing?: Pairing }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-17 items-start">
      {!pairing && (
        <>
          <span></span>
          <span></span>
        </>
      )}
      {pairing && (
        <>
          {/* Column 1: Image */}
          <Link
            href={`/item/${pairing.item2.id}`}
            className="relative w-64 h-96 mx-auto lg:mx-0"
          >
            <Image
              src={pairing.item2.cover ?? bookTemplate}
              alt="Item cover"
              fill
              className="object-contain"
            />
          </Link>

          {/* Column 2: Book information */}
          <section className="grid grid-rows-[auto_auto_1fr_auto] gap-4 self-start">
            <div>
              <h2
                className={`text-4xl font-bold ${makasar.className} text-dark-red`}
              >
                Cherry On Top
              </h2>
              <p>100% of users agree</p>
            </div>

            <div>
              <h3 className="text-2xl font-medium">{pairing.item2.title}</h3>
              <p>Book by {pairing.item2.author}</p>
              {pairing.item2.description && (
                <p className="italic">
                  &#8220;{pairing.item2.description}&#8221;
                </p>
              )}
            </div>

            <div className="row-start-4 flex items-center gap-4">
              <Heart
                onClick={() => setLiked((prev) => !prev)}
                className="cursor-pointer w-7 h-7"
                style={{
                  fill: liked ? "#8B0000" : "none",
                  color: liked ? "#8B0000" : "#9CA3AF",
                }}
              />
              <Button className="bg-dark-red font-bold">Read</Button>
              <Button className="bg-dark-red font-bold">Hide</Button>
            </div>
          </section>
        </>
      )}

      {/* Column 3: Search and Pairings */}
      <div className="flex flex-col gap-2 w-full max-w-[15rem] mx-auto lg:mx-0">
        {/* Search bar */}
        <form
          action="/search"
          method="get"
          className={`w-full h-10  ${montserrat.className}`}
        >
          <Input
            name="query"
            placeholder="Search here"
            className="w-full rounded-full bg-white border-dark-red border-2 placeholder:text-gray-700"
          />
        </form>

        {/* Pairings box */}
        <div className="border-2 border-dark-red rounded-xl p-4 bg-[#F1E2D9] shadow-md h-[14rem] overflow-hidden">
          <form className="flex flex-col gap-1">
            <div>
              <label
                htmlFor="item1b"
                className="block text-sm font-semibold mb-1 text-dark-red"
              >
                Item 1
              </label>
              <input
                id="item1b"
                type="text"
                placeholder={pairing ? pairing.item2.title : undefined}
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-dark-red"
              />
            </div>
            <div>
              <label
                htmlFor="item2b"
                className="block text-sm font-semibold mb-1 text-dark-red"
              >
                Item 2
              </label>
              <input
                id="item2b"
                type="text"
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-dark-red"
              />
            </div>
            <button className="mt-4 bg-dark-red text-white font-semibold rounded-full px-4 py-2 hover:bg-red-800 transition-colors">
              New Pairing
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
