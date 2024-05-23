import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialsRegister = () => {
  const Social = [
    {
      id: 1,
      name: "Google",
      icon: "/icons/socials/google.svg",
    },
    {
      id: 2,
      name: "Facebook",
      icon: "/icons/socials/facebook.svg",
    },
    {
      id: 3,
      name: "Apple",
      icon: "/icons/socials/apple.svg",
    },
  ];
  return (
    <div className="mt-[26px] mb-[75px]">
      <ul className=" flex flex-col gap-[14px]">
        {Social.map((s) => {
          return (
            <li
              key={s.id}
              className="flex flex-row justify-center gap-5 cursor-pointer
              w-full py-[14px] px-[20px] h-[53px] rounded-lg border-[#D4D4D4] border-[1px]
              "
            >
              <Image src={s.icon} width={20} height={20} alt={s.name} />
              <p>{s.name}</p>
            </li>
          );
        })}
      </ul>
      <div className=" mt-10 w-full flex flex-col items-center">
        <p className="text-[#979797] text-[14px]">With an existing account</p>
        <Link href={"/auth/login"} className=" text-[#3C74FF]">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SocialsRegister;
