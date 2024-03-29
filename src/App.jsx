import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Porfolio from "./components/Porfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  // routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Porfolio />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };
  // thememode class removal and injection
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <RouterProvider router={router}>
        <Home />
        <Porfolio />
        <About />
        <Contact />
        <Footer />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
