import { makasar } from "@/fonts";
import FullLogo from "@/../public/full-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center ${makasar.className}`}>
      <Image src={FullLogo} alt="Cherry Pick Logo" />
    </Link>
  );
}
