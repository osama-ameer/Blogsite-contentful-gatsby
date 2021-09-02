import React from "react";

const Footer = () => {
  return (
    <div style={{ marginLeft: "200px" }}>
      © {new Date().getFullYear()}, Blog Site
    </div>
  );
};

export default Footer;