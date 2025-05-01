import { Button } from "../ui/button";
import Logo from "./logo";

export default async function Header() {
  return (
    <header className="h-16 px-4 grid grid-cols-[auto_1fr_auto] items-center">
      <Logo />
      <span></span>
      <Button className="font-bold bg-dark-red">Login</Button>
    </header>
  );
}
