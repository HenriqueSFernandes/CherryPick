import { get, getBackendUrl } from "@/utils";
import { Item, Pairing } from "@/types";
import ItemView from "@/components/item/ItemView";

function ErrorMessage({ message }: { message: string }) {
  return (
    <main className="p-8 grid justify-center items-center bg-transparent">
      <h1 className="text-2xl text-center">{message}</h1>
    </main>
  );
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const item = await get(getBackendUrl() + `/item/${id}`);
  if (item.status !== 200) {
    const message =
      item.status === 404
        ? `Could not find item with id "${id}"`
        : (item.data as unknown as string);
    return <ErrorMessage message={message} />;
  }

  const itemData = item.data as unknown as Item;

  // Fetch recommended pairings
  console.log(getBackendUrl() + `/item/${itemData.id}/pairings`);
  const recommendedPairings = await get(
    getBackendUrl() + `/item/${itemData.id}/pairings`,
  );

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

  return <ItemView item={itemData} pairings={pairingsData} />;
}
