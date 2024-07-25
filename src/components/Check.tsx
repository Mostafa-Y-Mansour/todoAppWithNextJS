"use client";
import { FC, useState } from "react";
import Image from "next/image";
import checkImage from "@/assets/images/icon-check.svg";

interface IProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Check: FC<IProps> = ({ checked, setChecked }) => {
  function checkBox(): JSX.Element {
    if (checked)
      return (
        <div className="p-[14px] rounded-full bg-gradient-linear cursor-pointer relative">
          <Image
            src={checkImage}
            alt="checked"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width={15}
          />
        </div>
      );

    return (
      <div className="p-[14px] relative rounded-full bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX hover:bg-gradient-linear cursor-pointer">
        <div className="bg-white dark:bg-dark-blue-veryDark-desaturated p-3  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    );
  }

  return (
    <div
      onClick={() => setChecked((prev) => !prev)}
      className="flex items-center p-4"
    >
      {checkBox()}
    </div>
  );
};

export default Check;
