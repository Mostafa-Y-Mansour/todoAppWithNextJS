import { FC } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Modal: FC<IProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full  h-dvh backdrop-blur-md justify-center items-center ${className} z-30`}
    >
      <div className="min-w-[300px] bg-white  dark:bg-dark-blue-veryDark drop-shadow-2xl rounded-md m-4 p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
