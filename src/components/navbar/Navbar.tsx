import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-[#EEEEEE] py-2 px-[14px] ">
        <Link href={"#"} className="flex flex-row gap-2">
          <Image
            src={"/icons/left-arrow2.svg"}
            alt={"left-arrow"}
            width={20}
            height={20}
          />
          <p className=" font-medium">
            Go back to the old version of Mymarket.ge
          </p>
        </Link>
      </div>
      <div className="flex flex-row p-5 justify-between items-center shadow-lg">
        <Link href={"/"}>
          <Image
            src={"/logo/mymarket.svg"}
            alt={"mymarket-logo"}
            width={113}
            height={29}
          />
        </Link>
        <div className=" flex flex-row justify-center items-center">
          <button className="  w-11 h-11 flex justify-center items-center">
            <Image
              src={"/icons/nav/search.svg"}
              alt={"menu-bar"}
              width={20}
              height={20}
            />
          </button>
          <button className=" w-14 h-11 flex justify-center items-center">
            <Image
              src={"/icons/nav/menu.svg"}
              alt={"menu-bar"}
              width={44}
              height={44}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
