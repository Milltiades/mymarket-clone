"use client";
import Image from "next/image";
import { logout } from "./auth/logout/actions";
import { redirect } from "next/dist/server/api-utils";
import { login } from "./auth/login/actions";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Advertisement from "@/components/ad/Advertisement";

export default function Home() {
  return (
    <div>
      {/* <h1>Main page</h1>
      <button onClick={() => logout()}>Sign out</button>
      <Link href={"/auth/login"}>Sign in</Link> */}
      <Advertisement />

      <div className=" w-full flex flex-row gap-8 py-[10px] pl-[10px] bg-[#6425D8] text-white h-[105px] text-[14px] items-center font-semibold leading-7">
        <h2>
          გადაიხადე VISA ბარათით Google Pay-სა და Apple Pay-ს საშუალებით და
          მიიღე მონაწილეობა გათამაშებაში{" "}
        </h2>
        <Image
          src="/car/volvo.png"
          alt={"tnetvolvo"}
          width={72}
          height={55}
          className=" h-14"
        />
      </div>
      {/* <div>
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
      </div> */}
      <Navbar />
    </div>
  );
}
