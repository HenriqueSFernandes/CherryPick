import { makasar } from "@/fonts";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Profile() {
  return (
    <article className="flex flex-col items-center p-8 gap-8">
      <div className="w-128 h-128 rounded-full bg-red-900 flex items-center justify-center mb-4">
        <Image
          src="/lego.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h1
          className={`text-4xl font-bold text-dark-blue p-2 ${makasar.className}`}
        >
          Henrique Fernandes
        </h1>
      </div>

      <div className="flex flex-row justify-center gap-x-4 mt-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="bg-dark-red"
        >
          Edit Profile
        </Button>
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="bg-dark-red"
        >
          Log Out
        </Button>
      </div>
    </article>
  );
}
