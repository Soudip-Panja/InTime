import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ROI from "./Pages/ROI";
import WhyInTimePage from "./Pages/WhyInTime";
import Industries from "./Pages/Industries";
import BIAnalytics from "./Pages/BIAnalytics";
import SAP from "./Pages/SAP";
import SmartApp from "./Pages/SmartApp";
import StrategicTech from "./Pages/StrategicTech";
import EnterpriseTraining from "./Pages/EnterpriseTraining";
import BossAi from "./Pages/BossAi";
import Carrers from "./Pages/Carrers";
import ContactUs from "./Pages/ContactUs";

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
    path: "/strategic-tech",
    element: <StrategicTech />,
  },
  {
    path: "/enterprise-training",
    element: <EnterpriseTraining />,
  },
  {
    path: "/boss-ai",
    element: <BossAi />,
  },
  {
    path: "/careers",
    element: <Carrers />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
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
