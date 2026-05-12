import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ROI from "./Pages/ROI";
import WhyInTimePage from "./Pages/WhyInTime";
import Industries from "./Pages/Industries";
import BIAnalytics from "./Pages/BIAnalytics";
import SAP from "./Pages/SAP";
import SmartApp from "./Pages/SmartApp";
import SmartTech from "./Pages/SmartTech";
import EnterpriseTraining from "./Pages/EnterpriseTraining";

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
  {
    path: "/bi-analytics",
    element: <BIAnalytics />,
  },
  {
    path: "/sap",
    element: <SAP />,
  },
  {
    path: "/smart-app",
    element: <SmartApp />,
  },
  {
    path: "/smart-tech",
    element: <SmartTech />,
  },
  {
    path: "/enterprise-training",
    element: <EnterpriseTraining />,
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
