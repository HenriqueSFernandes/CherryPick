import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import cherry from "@/../public/cherry.svg";
import darkCherry from "@/../public/dark-cherry.svg";
import { makasar } from "@/fonts";

export default function Item() {
  return (
    <div className="flex flex-col items-center text-center gap-8 p-8 w-full max-w-full">
      <div className="h-72 w-72 relative">
        <Image
          src={bookTemplate}
          alt="Item 1 cover"
          className="h-64 w-64 absolute object-contain"
        />
        <Image
          src={bookTemplate}
          alt="Item 2 cover"
          className="h-64 w-64 left-8 top-8 absolute object-contain"
        />
      </div>

      <h1
        className={`text-6xl text-center text-dark-blue ${makasar.className}`}
      >
        Jane Eyre
      </h1>
      <h2 className="text-2xl text-center">Book by Charlotte Brontë</h2>
      <div className="flex flex-row items-center gap-2 mt-[-1.5rem] mb-[-2.5rem]">
        <div className="flex flex-row gap-0">
          <Image src={cherry} alt="Cherry Rating" className="w-6 h-10" />
          <Image src={cherry} alt="Cherry Rating" className="w-6 h-10" />
          <Image src={cherry} alt="Cherry Rating" className="w-6 h-10" />
          <Image src={cherry} alt="Cherry Rating" className="w-6 h-10" />
          <Image src={darkCherry} alt="Cherry Rating" className="w-6 h-10" />
        </div>

        <div className="flex flex-col justify-center items-start pl-2 ">
          <p className="text-3xl font-bold text-dark-blue leading-none">4,1</p>
          <p className="text-xs text-gray-500 leading-none">1234 reviews</p>
        </div>
      </div>
    </div>
  );
}
