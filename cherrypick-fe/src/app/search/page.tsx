"use client";

import TopPairing from "@/components/search/TopPairing";
import { makasar, montserrat } from "@/fonts";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <main className="p-8 flex flex-col gap-8 bg-transparent">
      <section className="inline">
        <p className="text-4xl">
          <span className={`${montserrat.className}`}>For </span>
          <span className={`${makasar.className}`}>&#8220;{query}&#8221;</span>
        </p>
        <span className={`text-2xl ${montserrat.className}`}>we found</span>
      </section>
      <TopPairing />
    </main>
  );
}
