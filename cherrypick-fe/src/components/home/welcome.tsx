import Image from "next/image";
import { montserrat } from "@/fonts";
import { Input } from "../ui/input";
import WelcomeLogo from "@/../public/welcomeLogo.svg";
export default async function Welcome() {
  return (
    <section className="grid grid-rows-[auto_2rem_auto_0.5rem_auto] max-w-lg justify-items-center">
      <div className="max-w-96 ">
        <Image
          src={WelcomeLogo}
          alt="Welcome Logo Fresh Picks Perfectly Paired"
        />
      </div>
      <div className={`row-start-3 ${montserrat.className} text-center`}>
        Enter your current pick and find handpicked book, show, movie or album
        recommendations
      </div>
      <Input
        className={`row-start-5 h-10 ${montserrat.className} rounded-full border-dark-blue border-2 placeholder:text-gray-700`}
        placeholder="Type here to start discovering..."
      />
    </section>
  );
}
