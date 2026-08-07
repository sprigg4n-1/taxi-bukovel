import React from "react";

const BaseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-0 w-full max-w-365 px-3 md:px-5 lg:px-8 h-full">
      {children}
    </div>
  );
};

export default BaseContainer;
