import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";

const Advertisement = () => {
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAdd(true);
    }, 2000);
  }, []);

  return (
    <div className={cn("bg-white py-2 px-6", { hidden: !isAdd })}>
      <div
        className=" bg-black rounded-xl h-[140px] flex flex-row justify-end p-2 bg-ad-m2
      
      "
      >
        <button
          className=" rounded-full w-9 h-9 bg-[#F7F8FA] flex flex-row justify-center items-center"
          onClick={() => setIsAdd(false)}
        >
          <Image
            src={"/icons/nav/close.svg"}
            alt={"close"}
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
