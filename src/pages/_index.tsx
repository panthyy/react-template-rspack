import { Button, Layout } from "@components/index";
import { Pokemons } from "@components/Pokemons";
import { withLayout } from "@utils/withLayout";

export const IndexPage = withLayout(() => {
  return (
    <div>
      <h1>Index Page</h1>
      <Button>Click Me</Button>
      <Pokemons />
    </div>
  );
});
