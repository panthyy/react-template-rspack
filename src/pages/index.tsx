import { Button } from "@components/index";

export const IndexPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Button
        onClick={() => {
          alert("Hello World!");
        }}
      >
        Click Me
      </Button>
    </div>
  );
};
