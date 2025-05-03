"use client";

import Image from "next/image";
import Link from "next/link";
import bookTemplate from "@/../public/book-template.png";
import { Pairing } from "@/types";

export default function SecondaryPairing({ pairing }: { pairing: Pairing }) {
  return (
    <article className="h-40 w-36 relative" title={pairing.item2.title}>
      <Link href={`/item/${pairing.item2.id}`}>
        <Image
          src={pairing.item1.cover || bookTemplate}
          alt="Item 1 cover"
          width={128}
          height={128} // Next.js forces me to define these...
          className="h-32 w-32 absolute object-contain"
        />
        <Image
          src={pairing.item2.cover || bookTemplate}
          alt="Item 2 cover"
          width={128}
          height={128}
          className="h-32 w-32 left-4 top-4 absolute object-contain"
        />
      </Link>
    </article>
  );
}
