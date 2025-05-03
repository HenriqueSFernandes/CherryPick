"use client";

import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import { makasar } from "@/fonts";
import { Button } from "../ui/button";
import { Pairing } from "@/types";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function TopPairing({ pairing }: { pairing: Pairing }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="grid grid-cols-[auto_1fr] gap-8">
      <div className="relative w-64">
        <Image
          src={pairing.item2.cover ?? bookTemplate}
          alt="Item cover"
          fill
          className="object-contain"
        />
      </div>

      <section className="grid grid-rows-[auto_auto_1fr_auto] gap-4">
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
    </article>
  );
}
