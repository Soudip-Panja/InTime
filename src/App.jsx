import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ROI from "./Pages/ROI";
import WhyInTimePage from "./Pages/WhyInTime";
import Industries from "./Pages/Industries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/roi",
    element: <ROI />,
  },
  {
    path: "/why-intime",
    element: <WhyInTimePage />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
