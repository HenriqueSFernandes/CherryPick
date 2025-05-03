import RelatedPairings from "@/components/search/RelatedPairings";
import Profile from "@/components/user/profile";
import { makasar } from "@/fonts";
import { Pairing } from "@/types";
import { get, getBackendUrl } from "@/utils";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const recommendedPairingsRes = await get(
    getBackendUrl() + `/user/${id}/pairings`,
  );

  const recommendedPairings =
    recommendedPairingsRes.status === 200
      ? (recommendedPairingsRes.data as unknown as Pairing[])
      : [];

  return (
    <main className="flex justify-between px-48 py-16 gap-16 bg-transparent">
      <Profile />
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-8 bg-white/50 border-l-4 border-dark-red p-4 rounded-md text-2xl">
          <p className="font-bold">About</p>
          <p>
            {" "}
            I tend to gravitate toward emotionally rich and thought-provoking
            stuff. For books, I love literary fiction and magical
            realism—Murakami and Toni Morrison are go-tos, and The Night Circus
            is a favorite for its atmosphere.
          </p>
          <p>
            Movies-wise, I&apos;m into psychological thrillers and smart
            sci-fi—Eternal Sunshine of the Spotless Mind and Arrival come to
            mind. TV shows range from dark dramas like True Detective to sharp,
            character-driven series like Fleabag or The Bear.
          </p>
          <p>
            Music is mostly indie rock, alternative, and ambient. I keep In
            Rainbows and Blonde on repeat, and I always have some lo-fi or
            ambient tracks playing when I read.
          </p>
          <p>
            If it&apos;s emotionally resonant, a little offbeat, and lingers
            afterward, I&apos;m probably into it.
          </p>
        </section>
        <section>
          <h2 className={`text-4xl text-dark-blue p-4 ${makasar.className}`}>
            Pairings
          </h2>
          <RelatedPairings pairings={recommendedPairings} />
        </section>
      </div>
    </main>
  );
}
