"use client";

import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import { makasar, montserrat } from "@/fonts";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Pairing } from "@/types";

export default function TopPairing({ pairing }: { pairing: Pairing }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-17 items-start">
      {/* Coluna 1: Imagem */}
      <div className="relative w-64 h-96 mx-auto lg:mx-0">
        <Image
          src={pairing.item2.cover ?? bookTemplate}
          alt="Item cover"
          fill
          className="object-contain"
        />
      </div>

      {/* Coluna 2: Informação do livro */}
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
            <p className="italic">&#8220;{pairing.item2.description}&#8221;</p>
          )}
        </div>

        <Button className="row-start-4 justify-self-start bg-dark-red font-bold">
          See More
        </Button>
      </section>

      {/* Coluna 3: Search e Pairings */}
      <div className="flex flex-col gap-2 w-full max-w-[15rem] mx-auto lg:mx-0">
        {/* Search bar */}
        <form
          action="/search"
          method="get"
          className={`w-full h-10  ${montserrat.className}`}
        >
          <Input
            name="query"
            placeholder="Type here to start discovering..."
            className="w-full rounded-full bg-white border-dark-red border-2 placeholder:text-gray-700"
          />
        </form>

        {/* Pairings box */}
        <div className="border-2 border-dark-red rounded-xl p-4 bg-[#F1E2D9] shadow-md h-[15rem] overflow-hidden">
          <form className="flex flex-col gap-2">
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
                placeholder="Pride and Prejudice"
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
            <button
              type="submit"
              className="bg-dark-red text-white font-semibold rounded-full px-4 py-2 hover:bg-red-800 transition-colors"
            >
              New Pairing
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
