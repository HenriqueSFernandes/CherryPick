import Image from "next/image";
import bookTemplate from "@/../public/book-template.png";
import cherry from "@/../public/cherry.svg";
import darkCherry from "@/../public/dark-cherry.svg";
import { makasar } from "@/fonts";

export default function Item() {
  return (
    <article className="flex flex-col items-center text-center gap-8 p-8">
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
      <div className="flex flex-row justify-center gap-8 pb-4">
        <div className="flex flex-row">
          <Image src={cherry} alt="Cherry Rating" className="w-16 h-16" />
          <Image src={cherry} alt="Cherry Rating" className="w-16 h-16" />
          <Image src={cherry} alt="Cherry Rating" className="w-16 h-16" />
          <Image src={cherry} alt="Cherry Rating" className="w-16 h-16" />
          <Image src={darkCherry} alt="Cherry Rating" className="w-16 h-16" />
        </div>

        <div className="flex flex-col justify-between items-start">
          <p className="text-4xl font-bold text-dark-blue">4,1</p>
          <p className="text-xs text-gray-500">1234 reviews</p>
        </div>
      </div>
    </article>
  );
}
