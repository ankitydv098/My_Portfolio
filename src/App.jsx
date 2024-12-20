import React from "react";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import TerminalSection from "./Components/TerminalSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Heros />
          <Projects />
          <Skills />
          <Footer />
        </>
      ),
    },
    {
      path: "/terminal",
      element: (
        <>
          <Navbar />
          <Heros />
          <Projects />
          <Skills />
          <Footer />
          <TerminalSection />
        </>
      ),
    },
    {
      path: '/blogs',
      element: (
        <>
          <Blogs />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;