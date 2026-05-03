import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Composer from "../pages/Composer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/composer/:id",
    element: <Composer />,
  },
]);

export default router;
