import { makasar } from "@/fonts";

export default async function Logo() {
  return (
    <div className={`flex items-center ${makasar.className}`}>
      <span className="text-2xl font-bold text-gray-900">Cherry Pick</span>
    </div>
  );
}
