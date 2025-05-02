"use client";

import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import { makasar } from "@/fonts";
import { Button } from "../ui/button";

export default function TopPairing() {
  return (
    <section className="grid grid-cols-[auto_1fr] gap-8">
      <Image src={bookTemplate} alt="Item cover" />
      <section className="grid grid-rows-[auto_auto_1fr_auto]">
        <div>
          <h2
            className={`text-4xl font-bold ${makasar.className} text-dark-red`}
          >
            Cherry On Top
          </h2>
          <p>100% of users agree</p>
        </div>

        <div>
          <h3 className="text-2xl font-medium">Jane Eyre</h3>
          <p>Book by Charlotte Bronte</p>
          <p>
            &apos;The horror, whatever it was, had not yet entirely spoiled that
            marvellous beauty&apos;
          </p>
        </div>

        <Button className="row-start-4 justify-self-start bg-dark-red font-bold">
          See
        </Button>
      </section>
    </section>
  );
}
