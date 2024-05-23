"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageChanger = () => {
  //   const localActive = useLocale();
  //   const router = useRouter();
  //   const pathname = usePathname();

  return (
    <div>
      <Select
      // onValueChange={(val) => {
      //   router.push(pathname.replace(localActive, `${val}`));
      // }}
      >
        <SelectTrigger className=" w-[140px] h-[40px] mr-[10px] focus:outline-none py-3 px-4 ">
          <SelectValue placeholder={"English"} />
        </SelectTrigger>
        <SelectContent className="w-[120px]  mt-[8px] h-[114px] flex flex-col py-[8px]">
          <SelectItem value="ka">ქართული</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageChanger;
