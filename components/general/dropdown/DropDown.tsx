import React, { useEffect, useRef, useState } from "react";

const DropDown = ({
  title,
  children,
}: {
  title: string;
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
      <p className="px-6 py-2 border rounded font-semibold hover:text-gray-500">
        {title}
      </p>
      {show ? (
        <div className="absolute w-44 right-0 border bg-white mt-1 p-2 rounded-md flex flex-col">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
