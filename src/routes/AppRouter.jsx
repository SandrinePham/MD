import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Prestations from "../pages/Prestations";

import Layout from "../layouts/Layout";

function AppRouter() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestations" element={<Prestations />} />
        </Route>{" "}
      </Routes>
  );
}

export default AppRouter;
