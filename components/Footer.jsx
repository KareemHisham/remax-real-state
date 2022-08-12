import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-3 border-top border-muted" style={{color: "#395B64"}}>
      <div className="container">
        &copy; {new Date().getFullYear()} Remax,Inc.
      </div>
    </footer>
  );
};

export default Footer;
