"use client";

import SecondaryPairing from "@/components/search/SecondaryPairing";
import TopPairing from "@/components/search/TopPairing";
import { makasar, montserrat } from "@/fonts";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <main className="p-8 flex flex-col gap-8 bg-transparent">
      <section className="inline">
        <h1 className="text-4xl">
          <span className={`${montserrat.className}`}>For </span>
          <span className={`${makasar.className}`}>&#8220;{query}&#8221;</span>
        </h1>
        <span className={`text-2xl ${montserrat.className}`}>we found</span>
      </section>
      <TopPairing />
      <section>
        <h2 className={`text-2xl ${makasar.className}`}>Other Pairings</h2>
        <div className="overflow-x-scroll">
          <div className="flex gap-8 w-max">
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
            <SecondaryPairing />
          </div>
        </div>
      </section>
    </main>
  );
}
