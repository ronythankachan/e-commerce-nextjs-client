import React, { useEffect, useRef, useState } from "react";

const DropDown = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div
      onClick={() => setShow(!show)}
      className="relative cursor-pointer"
      ref={wrapperRef}
    >
      <div className="p-2 border rounded hover:text-blue-500 hover:bg-gray-100">
        {title}
      </div>
      {show ? (
        <div className="absolute w-44 right-0 border bg-white mt-1 p-2 rounded-md flex flex-col">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
