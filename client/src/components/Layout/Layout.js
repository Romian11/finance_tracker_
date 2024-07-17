import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
