import { Button } from "@components/index";
import Layout from "@components/Layout";
import { withLayout } from "@utils/withLayout";

export const IndexPage = withLayout(() => {
  return (
    <div>
      <h1>Index Page</h1>
      <Button>Click Me</Button>
    </div>
  );
});
