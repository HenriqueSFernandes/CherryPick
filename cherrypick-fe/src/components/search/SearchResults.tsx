"use client";

import SecondaryPairing from "@/components/search/SecondaryPairing";
import TopPairing from "@/components/search/TopPairing";
import { makasar, montserrat } from "@/fonts";
import { Pairing } from "@/types";

export default function SearchResults({
  query,
  topPairing,
  secondaryPairings,
}: {
  query: string;
  topPairing?: Pairing;
  secondaryPairings: Pairing[];
}) {
  return (
    <main className="p-8 flex flex-col gap-8 bg-transparent">
      <section className="inline">
        <h1 className="text-4xl">
          <span className={`${montserrat.className}`}>For </span>
          <span className={`${makasar.className}`}>&#8220;{query}&#8221;</span>
        </h1>
        <span className={`text-2xl ${montserrat.className}`}>
          {topPairing ? "we found" : "no matches we're found"}
        </span>
      </section>
      {topPairing && (
        <>
          <TopPairing pairing={topPairing} />
          <section className="space-y-4">
            <h2 className={`text-2xl ${makasar.className}`}>Other Pairings</h2>
            <div className="overflow-x-scroll">
              <div className="flex gap-8 w-max">
                {secondaryPairings.length === 0 && (
                  <div className="text-2xl">No other pairings found</div>
                )}
                {secondaryPairings.map((pairing: Pairing, index: number) => (
                  <SecondaryPairing pairing={pairing} key={index} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
