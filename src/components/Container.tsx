import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return (
    <div className="min-w-[312px] w-full max-w-[660px] mx-auto ">
      {children}
    </div>
  );
};

export default Container;
