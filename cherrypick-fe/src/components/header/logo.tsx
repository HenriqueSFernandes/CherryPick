import { makasar } from "@/fonts";
import icon from "@/../public/icon.svg";
import Image from "next/image";
import Link from "next/link";

export default async function Logo() {
  return (
    <Link href="/" className={`flex items-center ${makasar.className}`}>
      <Image src={icon} alt="Cherry Pick Logo" width={48} height={48} />
      <span className="text-2xl font-bold text-dark-blue">Cherry Pick</span>
    </Link>
  );
}
