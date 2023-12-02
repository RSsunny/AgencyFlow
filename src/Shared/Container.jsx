import React from "react";

const Container = ({ children, classStyle }) => {
  return (
    <div className={`max-w-7xl mx-auto px-2 md:px-5 lg:px-0  ${classStyle}`}>
      {children}
    </div>
  );
};

export default Container;
