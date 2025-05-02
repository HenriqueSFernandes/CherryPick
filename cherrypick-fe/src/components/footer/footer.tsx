import Image from "next/image";
import darkIcon from "@/../public/dark-icon.svg";

export default async function Footer() {
  return (
    <footer className="h-12 px-4 flex items-center justify-center gap-2">
      <div className="text-xs text-center text-gray-500">ShiftAPPens25</div>
      <Image src={darkIcon} alt="Cherry Pick Logo" width={20} height={20} />
      <div className="text-xs text-center text-gray-500">
        2025 Cherry Pick &copy;
      </div>
    </footer>
  );
}
