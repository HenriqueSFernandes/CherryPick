import SecondaryPairing from "@/components/search/SecondaryPairing";
import Profile from "@/components/user/profile";
import { makasar } from "@/fonts";

export default function UserPage() {
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
          <div className="overflow-x-scroll py-4">
            <div className="flex gap-8 w-max">
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
