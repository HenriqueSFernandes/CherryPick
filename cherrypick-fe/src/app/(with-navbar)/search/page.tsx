import { get, getBackendUrl } from "@/utils";
import SearchResults from "@/components/search/SearchResults";

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
  const query = searchParams.query;

  const item = await get(getBackendUrl() + `/search?query=${query}`);
  if (item.status !== 200) {
    const message =
      item.status === 404 ? `No matches to "${query}" found` : item.data;
    return <ErrorMessage message={message} />;
  }

  console.log(item.data);

  // Fetch recommended pairings
  const recommendedPairings = await get(
    getBackendUrl() + `/item/${item.data.id}/pairings`,
  );
  if (recommendedPairings.status !== 200) {
    const message =
      recommendedPairings.status === 404
        ? "No pairings found"
        : recommendedPairings.data;
    return <ErrorMessage message={message} />;
  }

  if (recommendedPairings.data.length === 0) {
    return <ErrorMessage message="No pairings found" />;
  }

  return (
    <SearchResults
      query={query}
      topPairing={recommendedPairings.data[0]}
      secondaryPairings={recommendedPairings.data.slice(1, 9)}
    />
  );
}
