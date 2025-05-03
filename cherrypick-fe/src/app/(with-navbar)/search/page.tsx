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
  searchParams: Promise<{ query: string }>;
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

  const itemData = item.data as unknown as Item;

  // Fetch recommended pairings
  const recommendedPairings = await get(
    getBackendUrl() + `/item/${itemData.id}/pairings`,
  );
  console.log(recommendedPairings);

  if (
    recommendedPairings.status !== 200 &&
    recommendedPairings.status !== 404
  ) {
    const message = recommendedPairings.data as unknown as string;
    return <ErrorMessage message={message} />;
  }

  const pairingsData =
    recommendedPairings.status !== 404
      ? (recommendedPairings.data as unknown as Pairing[])
      : [];
  const hasData = pairingsData.length > 0;

  return (
    <SearchResults
      query={query}
      topPairing={hasData ? pairingsData[0] : undefined}
      secondaryPairings={hasData ? pairingsData.slice(1, 9) : []}
    />
  );
}
