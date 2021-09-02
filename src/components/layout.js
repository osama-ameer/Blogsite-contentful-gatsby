import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;