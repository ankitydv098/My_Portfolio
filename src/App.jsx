import React from "react";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import TerminalSection from "./Components/TerminalSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DynamicIconCloud from "./Components/DynamicIconCloud";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Heros />
          <Projects />
          <DynamicIconCloud />
          <Skills />
          <Footer />
        </>
      ),
    },
    {
      path: "/terminal",
      element: (
        <>
          <TerminalSection /> {/* ✅ Now Only Terminal Appears */}
        </>
      ),
    },
    {
      path: "/blogs",
      element: (
        <>
          <Navbar /> {/* ✅ Added Navbar */}
          <Blogs />
          <Footer /> {/* ✅ Added Footer */}
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
