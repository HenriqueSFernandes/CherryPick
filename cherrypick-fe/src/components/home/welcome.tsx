import { makasar, montserrat } from "@/fonts";

export default async function Welcome() {
  return (
    <section className="grid grid-rows-[auto_2rem_auto] max-w-lg justify-items-center">
      <div
        className={`text-5xl text-center font-bold ${makasar.className} text-center text-pretty max-w-96`}
      >
        Fresh Picks, Perfectly Paired
      </div>
      <div className={`row-start-3 ${montserrat.className} text-center`}>
        Enter your current pick and find handpicked book, show, movie or album
        recommendations
      </div>
    </section>
  );
}
