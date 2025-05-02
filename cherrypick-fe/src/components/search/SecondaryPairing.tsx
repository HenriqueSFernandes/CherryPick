"use client";

import Image from "next/image";
import Link from "next/link";
import bookTemplate from "@/../public/book-template.png";

export default function SecondaryPairing() {
  return (
    <article className="h-36 w-36 relative">
      <Link href={"/pairing/1/2"}>
        <Image
          src={bookTemplate}
          alt="Item 1 cover"
          className="h-32 w-32 absolute object-contain"
        />
        <Image
          src={bookTemplate}
          alt="Item 2 cover"
          className="h-32 w-32 left-4 top-4 absolute object-contain"
        />
      </Link>
    </article>
  );
}
