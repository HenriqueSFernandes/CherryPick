import { get, getBackendUrl } from "@/utils";
import SearchResults from "@/components/search/SearchResults";
import { Item, Pairing } from "@/types";

function ErrorMessage({ message }: { message: string }) {
  return (
    <main className="p-8 grid justify-center items-center bg-transparent">
      <h1 className="text-2xl text-center">{message}</h1>
    </main>
  );
}

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = (await searchParams).query;

  const item = await get(getBackendUrl() + `/search?query=${query}`);
  if (item.status !== 200) {
    const message =
      item.status === 404
        ? `No matches to "${query}" found`
        : (item.data as unknown as string);
    return <ErrorMessage message={message} />;
  }

  console.log(item.data);
  const itemData = item.data as unknown as Item;

  // Fetch recommended pairings
  const recommendedPairings = await get(
    getBackendUrl() + `/item/${itemData.id}/pairings`,
  );
  if (recommendedPairings.status !== 200) {
    const message =
      recommendedPairings.status === 404
        ? "No pairings found"
        : (recommendedPairings.data as unknown as string);
    return <ErrorMessage message={message} />;
  }

  const pairingsData = recommendedPairings.data as unknown as Pairing[];

  if (pairingsData.length === 0) {
    return <ErrorMessage message="No pairings found" />;
  }

  return (
    <SearchResults
      query={query}
      topPairing={pairingsData[0]}
      secondaryPairings={pairingsData.slice(1, 9)}
    />
  );
}
