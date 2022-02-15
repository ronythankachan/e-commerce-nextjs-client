import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 bg-gray-100 p-5 justify-items-center">
        <div>First section</div>
        <div>Second section</div>
        <div>Third section</div>
      </div>
      <div className="bg-gray-200 text-center p-2 "> CopyRight section</div>
    </section>
  );
};

export default Footer;
