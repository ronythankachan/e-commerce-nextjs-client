import { XIcon } from "@heroicons/react/outline";
import React from "react";

const Modal = ({
  title,
  children,
  open,
  setOpen,
}: {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: Function;
}) => {
  if (!open) return null;
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-fit  rounded-md p-2 md:p-5 m-4">
        <div className="flex justify-between border-b-2 p-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            className="hover:scale-110 p-1 rounded-md hover:bg-gray-200 hover:cursor-pointer transition-all duration-150 ease-in-out"
            onClick={() => setOpen(false)}
          >
            <XIcon className="w-5 h-5 " />
          </button>
        </div>
        <div className="p-2 md:p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
