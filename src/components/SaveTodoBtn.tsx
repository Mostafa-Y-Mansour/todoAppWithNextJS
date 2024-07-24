import Image from "next/image";
import React, { FC } from "react";
import checkImage from "@/assets/images/icon-check.svg";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  todo: string;
}

const SaveTodoBtn: FC<IProps> = ({ todo, ...rest }) => {
  if (todo) {
    return (
      <div
        {...rest}
        className="p-[14px] rounded-full bg-gradient-linear cursor-pointer relative"
      >
        <Image
          src={checkImage}
          alt="checked"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width={15}
        />
      </div>
    );
  }

  return (
    <div className="p-[2px] rounded-full bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX hover:bg-gradient-linear cursor-pointer">
      <div className="bg-white dark:bg-dark-blue-veryDark-desaturated p-3 rounded-full"></div>
    </div>
  );
};

export default SaveTodoBtn;
