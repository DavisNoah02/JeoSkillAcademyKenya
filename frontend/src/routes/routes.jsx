import React, { lazy } from "react";
import NotFound from "@/pages/NotFoundPage";
// import Navbar from "@/components/layout/Navbar.tsx";



const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPage"));
const Terms = lazy(() => import("@/pages/TermsPage"));
const Cookies = lazy(() => import("@/pages/CookiesPage"));
const AboutUs = lazy(() => import("@/pages/AboutUsPage"));
const ContactUs = lazy(() => import("@/pages/ContactUsPage"));
const Home = lazy(() => import("@/pages/HomePage"));

const routes = [
  {path: "/",element: <Home /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/TermsOfService", element: <Terms /> },
  { path: "/CookiesPolicy", element: <Cookies /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "*", element: <NotFound /> },
];

export default routes;