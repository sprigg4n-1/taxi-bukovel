"use client";
import BaseContainer from "../common/BaseContainer";

const MainFooter = () => {
  return (
    <footer className="bg-muted-foreground text-white/80 py-2">
      <BaseContainer>
        <div className="flex items-center gap-2 justify-between">
          <span className="font-bold text-[14px] uppercase text-white">
            Taxi Bukovel
          </span>
          <p
            className="text-[12px] cursor-pointer"
            onClick={() => navigator.clipboard.writeText("+380969086707")}
          >
            +380 96 908 67 07
          </p>
        </div>
      </BaseContainer>
    </footer>
  );
};

export default MainFooter;
