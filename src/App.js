import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Development from "./pages/development/Development";
import FAQs from "./pages/FAQs/FAQs";
import PageNotFound from "./pages/404Page/PageNotFound";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsCondition from "./pages/termsCondition/TermsCondition";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import Blog from "./pages/blogPage/Blog";
import Features from "./pages/features/Features";
import Single from "./pages/blogPage/single/Single";
import BusinessDistrict from "./pages/businessDistrict/BusinessDistrict";
import Video from "./pages/video/Video";
import Gallary from "./pages/gallary/Gallary";
import ToggleModeButton from "./components/toggleModeButton/ToggleModeButton";
import { ScrollRestoration } from "react-router-dom";
import SectorPage from "./pages/sectorPage/SectorPage";
import MediaPage from "./pages/mediaPage/MediaPage";
import SingleMediaPost from "./pages/mediaPage/singleMediaPost/SingleMediaPost";

export const ChangeModeContext = createContext();

const Layout = () => {
  return (
    <div className="app">
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = [
            "/",
            "/contact",
            "/gallery",
            "/development",
            "/blog/:id",
            "/videos",
            "/business-district",
            "/frequent-asked-questions",
          ];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      <Navbar />
      <ToggleModeButton />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Layout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Layout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "/blog/:id",
    element: <Layout />,
    children: [
      {
        path: "/blog/:id",

        element: <Single />,
      },
    ],
  },
  {
    path: "/media-blog",
    element: <Layout />,
    children: [
      {
        path: "/media-blog",
        element: <MediaPage />,
      },
    ],
  },

  {
    path: "/media-blog/:id",
    element: <Layout />,
    children: [
      {
        path: "/media-blog/:id",

        element: <SingleMediaPost />,
      },
    ],
  },
  {
    path: "/features",
    element: <Layout />,
    children: [
      {
        path: "/features",
        element: <Features />,
      },
    ],
  },
  {
    path: "/sector",
    element: <Layout />,
    children: [
      {
        path: "/sector",
        element: <SectorPage />,
      },
    ],
  },
  {
    path: "/gallery",
    element: <Layout />,
    children: [
      {
        path: "/gallery",
        element: <Gallary />,
      },
    ],
  },
  {
    path: "/videos",
    element: <Layout />,
    children: [
      {
        path: "/videos",
        element: <Video />,
      },
    ],
  },
  {
    path: "/business-district",
    element: <Layout />,
    children: [
      {
        path: "/business-district",
        element: <BusinessDistrict />,
      },
    ],
  },
  {
    path: "/about",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/events",
    element: <Layout />,
    children: [
      {
        path: "/events",
        element: <Event />,
      },
    ],
  },
  {
    path: "/frequent-asked-questions",
    element: <Layout />,
    children: [
      {
        path: "/frequent-asked-questions",
        element: <FAQs />,
      },
    ],
  },
  {
    path: "/development",
    element: <Layout />,
    children: [
      {
        path: "/development",
        element: <Development />,
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <Layout />,
    children: [
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/terms-conditions",
    element: <Layout />,
    children: [
      {
        path: "/terms-conditions",
        element: <TermsCondition />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ChangeModeContext.Provider value={{ theme, ToggleTheme }}>
      <div className="app" id={theme}>
        <RouterProvider router={router} />
      </div>
    </ChangeModeContext.Provider>
  );
};

export default App;
