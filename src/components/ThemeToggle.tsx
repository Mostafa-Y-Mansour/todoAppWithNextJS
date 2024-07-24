"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import sun from "@/assets/images/icon-sun.svg";
import moon from "@/assets/images/icon-moon.svg";

interface IProps {}

const ThemeToggle: FC<IProps> = (props) => {
  // Check system theme and set initial theme state
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState<"dark" | "light">(systemTheme);

  // Toggle "dark" from <html> class for tailwind to set the theme manually
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const ToggleSize = 30;
  const ToggleStyle = `w-[${ToggleSize}px] h-[${ToggleSize}px] bg-cyan-400 border-2 m-2 cursor-pointer`;

  return (
    <>
      <Image
        src={moon}
        alt="theme toggle"
        className={`${ToggleStyle} block dark:hidden`}
        onClick={() => setTheme("dark")}
        width={ToggleSize}
        height={ToggleSize}
      />
      <Image
        src={sun}
        alt="theme toggle"
        className={`${ToggleStyle} hidden dark:block`}
        onClick={() => setTheme("light")}
        width={ToggleSize}
        height={ToggleSize}
      />
    </>
  );
};

export default ThemeToggle;
