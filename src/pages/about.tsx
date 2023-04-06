import { withLayout } from "@utils/withLayout";

export const AboutPage = withLayout(() => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-center">
        This is an example of a Next.js app with Tailwind CSS and TypeScript.
      </p>
    </div>
  );
});
