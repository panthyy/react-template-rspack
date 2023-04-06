import { Button } from "@components/index";

const Logo = () => {
  return <div>Logo</div>;
};

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Logo />
        <h1 className="ml-2 text-2xl font-semibold font-inter">My App</h1>
      </div>
      <div className="flex items-center">
        <Button onClick={() => console.log("Clicked!")}>Click me!</Button>
      </div>
    </header>
  );
};
