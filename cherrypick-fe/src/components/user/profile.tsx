import { makasar } from "@/fonts";
import { Button } from "../ui/button";

export default function Profile() {
  return (
    <article className="flex flex-col items-center p-8 gap-8">
      <div className="w-128 h-128 rounded-full bg-red-900 flex items-center justify-center mb-4">
        <img
          src="/path-to-image.jpg"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h1
          className={`text-4xl font-bold text-dark-blue p-2 ${makasar.className}`}
        >
          Display Name
        </h1>
        <p className="text-2xl text-gray-500 p-2">@username</p>
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
