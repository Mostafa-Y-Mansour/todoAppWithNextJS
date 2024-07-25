import Image from "next/image";
import React, { FC } from "react";
import bgDesktopDark from "@/assets/images/bg-desktop-dark.jpg";
import bgMobileDark from "@/assets/images/bg-mobile-dark.jpg";
import bgDesktopLight from "@/assets/images/bg-desktop-light.jpg";
import bgMobileLight from "@/assets/images/bg-mobile-light.jpg";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Base: FC<IProps> = ({ children, className = "" }) => {
  const renderDarkMode = () => {
    const backgroundStyle = "w-full";

    return (
      <>
        <Image
          src={bgMobileDark}
          className={`hidden dark:block  dark:sm:hidden ${backgroundStyle}`}
          alt="background image"
        />
        <Image
          src={bgDesktopDark}
          className={`hidden dark:hidden dark:sm:block ${backgroundStyle}`}
          alt="background image"
        />

        <Image
          src={bgMobileLight}
          className={`block sm:hidden dark:hidden ${backgroundStyle}`}
          alt="background image"
        />
        <Image
          src={bgDesktopLight}
          className={`hidden sm:block dark:hidden ${backgroundStyle}`}
          alt="background image"
        />
      </>
    );
  };

  return (
    <div className={`relative top-0 min-h-dvh ${className}`}>
      <div className="absolute w-full">{renderDarkMode()}</div>
      <div className="absolute w-full mx-auto px-4 sm:px-6 max-w-[7xl] text-light-gray">
        {children}
      </div>
    </div>
  );
};

export default Base;
