import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, IndexPage, NotFoundPage } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import "@fontsource/inter/600.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}
