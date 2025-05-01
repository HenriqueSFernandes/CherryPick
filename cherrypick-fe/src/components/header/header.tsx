import Logo from "./logo";

export default async function Header() {
  return (
    <header className="h-16 px-4 flex items-center">
      <Logo />
    </header>
  );
}
