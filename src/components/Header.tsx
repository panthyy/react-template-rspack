import { Button } from "@components/index";
import { Link } from "react-router-dom";

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
      <nav>
        <ul className="flex items-center">
          <li className="ml-4">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <Button onClick={() => console.log("Clicked!")}>Click me!</Button>
      </div>
    </header>
  );
};
