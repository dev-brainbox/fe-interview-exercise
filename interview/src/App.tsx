import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AppMenu } from "./AppMenu";

const PageDashboard = () => (
  <Typography variant="h3" component="h1">
    Dashboard Page
  </Typography>
);
const PageProducts = () => (
  <Typography variant="h3" component="h1">
    Product list page
  </Typography>
);
const PageCustomers = () => (
  <Typography variant="h3" component="h1">
    Customers Page
  </Typography>
);
const Calculator = () => (
  <Typography variant="h3" component="h1">
    Calculator
  </Typography>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppMenu />,
      children: [
        {
          path: "products",
          element: <PageProducts />,
        },
        {
          path: "customers",
          element: <PageCustomers />,
        },
        {
          path: "calculator",
          element: <Calculator />,
        },
        {
          path: "dashboard",
          element: <PageDashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
