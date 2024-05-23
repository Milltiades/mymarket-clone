import React from "react";

import Image from "next/image";

const SearchComponent = () => {
  return (
    <div className="flex flex-col p-5 gap-4">
      <h1 className=" font-semibold">Anything you're looking for</h1>

      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center">
          <Image
            src={"/icons/main/searchTool.svg"}
            alt={"search-icon"}
            width={20}
            height={20}
          />
        </span>
        <input
          name="searchValue"
          placeholder="Ex.: Iphone 14"
          className="w-full outline-none border-2 border-[#FEC900] rounded-2xl border-primary-100 md:py-[22px] py-4 px-4 text-sm pl-10 md:pl-5"
          value=""
        />
      </div>
    </div>
  );
};

export default SearchComponent;
