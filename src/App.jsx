import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ROI from "./Pages/ROI";
import WhyInTimePage from "./Pages/WhyInTime";

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
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
