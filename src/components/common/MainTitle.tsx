import React from "react";

const MainTitle = ({ title, color }: { title: string; color?: string }) => {
  return (
    <h2
      className={`${color ? color : "text-primary"} font-extrabold text-[20px] sm:text-[24px] lg:text-[32px]`}
    >
      {title}
    </h2>
  );
};

export default MainTitle;
