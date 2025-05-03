"use client";

import { Item, Pairing } from "@/types";
import ItemInfo from "./ItemInfo";
import { Button } from "../ui/button";
import { makasar } from "@/fonts";
import RelatedPairings from "../search/RelatedPairings";

type Props = {
  item: Item;
  pairings: Pairing[];
};

export default function ItemView({ item, pairings }: Props) {
  return (
    <main className="p-8 gap-8 bg-transparent flex flex-col sm:flex-row lg:gap-16 max-w-full overflow-x-hidden">
      <div className="max-w-full">
        <ItemInfo item={item} />
      </div>

      <div className="flex flex-col gap-4 max-w-full">
        <section className="flex flex-col gap-8 max-w-full">
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-4 max-w-full">
            <Button className="bg-bright-red font-bold" size="lg">
              Reasons
            </Button>
            <Button className="bg-dark-red font-bold" size="lg">
              Description
            </Button>
            <Button className="bg-bright-red font-bold" size="lg">
              Reviews
            </Button>
          </div>

          <div className="bg-white/50 border-l-4 border-dark-red p-4 flex flex-col gap-y-2 max-w-3xl w-full overflow-x-auto">
            <p>
              <span className="font-bold">Genres:</span> Classics, Fiction,
              Horror
            </p>
            <p>
              <span className="font-bold">Author:</span> {item.author}
            </p>
            <p>
              <span className="font-bold">About the Author:</span> {item.author}
              O&apos;Fflahertie Wills Wilde was an Irish poet and playwright.
              After writing in different forms throughout the 1880s, he became
              one of the most popular playwrights in London in the early 1890s.
            </p>
            <p>
              <span className="font-bold">Description:</span>&nbsp;
              {item.description}
            </p>
          </div>
        </section>

        <section className="max-w-full">
          <h2 className={`p-4 text-2xl text-dark-blue ${makasar.className}`}>
            Other Pairings
          </h2>
          <RelatedPairings pairings={pairings} />
        </section>
      </div>
    </main>
  );
}
