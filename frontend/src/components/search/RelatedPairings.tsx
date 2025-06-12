import { Pairing } from "@/types";
import SecondaryPairing from "./SecondaryPairing";

export default function RelatedPairings({ pairings }: { pairings: Pairing[] }) {
  return (
    <div className="overflow-x-scroll">
      <div className="flex gap-8 w-max">
        {pairings.length === 0 && (
          <div className="text-xl">No other pairings found</div>
        )}
        {pairings.map((pairing: Pairing, index: number) => (
          <SecondaryPairing pairing={pairing} key={index} />
        ))}
      </div>
    </div>
  );
}
