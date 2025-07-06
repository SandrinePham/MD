import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <div className="topBar" />
      <Header />
      <div className="headerBottomBar" /> {/* bande sous le header */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
