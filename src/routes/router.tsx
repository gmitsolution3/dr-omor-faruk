import { createBrowserRouter } from "react-router";
import RootLayout from "@/Layout/RootLayout";
import Home from "@/pages/Home";
import DoctorProfile from "./../pages/DoctorProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/doctor-profile",
        element: <DoctorProfile />, 
      },
    ],
  },
]);
