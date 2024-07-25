import React, { FC } from "react";
import ThemeToggle from "./ThemeToggle";

interface IProps {
  className?: string;
}

const Header: FC<IProps> = ({ className = "" }) => {
  return (
    <header
      className={`flex justify-between items-end p-3 w-full mt-10 mb-3 sm:mt-14 sm:mb-8 ${className}`}
    >
      <p className=" text-white font-bold text-3xl sm:text-5xl tracking-[14px] p-0 m-0">
        TODO
      </p>

      <ThemeToggle />
    </header>
  );
};

export default Header;
