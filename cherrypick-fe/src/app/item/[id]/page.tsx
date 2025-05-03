import Item from "@/components/item/Item";
import SecondaryPairing from "@/components/search/SecondaryPairing";
import { Button } from "@/components/ui/button";
import { makasar } from "@/fonts";

export default function ItemPage() {
  return (
    <main className="p-8 gap-8 bg-transparent flex flex-col sm:flex-row lg:gap-16 max-w-full overflow-x-hidden">
      <div className="max-w-full">
        <Item />
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
              <span className="font-bold">Author:</span> Charlotte Bronte
            </p>
            <p>
              <span className="font-bold">About the Author:</span> Oscar Fingal
              O&apos;Fflahertie Wills Wilde was an Irish poet and playwright.
              After writing in different forms throughout the 1880s, he became
              one of the most popular playwrights in London in the early 1890s.
            </p>
            <p>
              <span className="font-bold">Synopsis:</span> Enthralled by his own
              exquisite portrait, Dorian Gray exchanges his soul for eternal
              youth and beauty. Influenced by his friend Lord Henry Wotton, he
              is drawn into a corrupt double life, indulging his desires in
              secret while remaining a gentleman in the eyes of polite society.
              Only his portrait bears the traces of his decadence.
            </p>
          </div>
        </section>

        <section className="max-w-full">
          <h2 className={`p-4 text-2xl text-dark-blue ${makasar.className}`}>
            Other Pairings
          </h2>
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
      </div>
    </main>
  );
}
