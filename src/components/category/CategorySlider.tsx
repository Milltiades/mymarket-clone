"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./CategorySlider.css";
import Image from "next/image";

const CategorySlider = () => {
  const filteredItems = [
    {
      id: 1,
      description: "smartphone",
      img: "/images/categories/category-smartphone.jpg",
    },
    {
      id: 2,
      description: "console",
      img: "/images/categories/category-console.jpg",
    },
    {
      id: 3,
      description: "dog",
      img: "/images/categories/category-dog.jpg",
    },
    {
      id: 4,
      description: "watch",
      img: "/images/categories/category-watch.jpg",
    },
    {
      id: 5,
      description: "boots",
      img: "/images/categories/category-boots.jpg",
    },
    {
      id: 6,
      description: "bicycle",
      img: "/images/categories/category-bicycle.jpg",
    },
    {
      id: 7,
      description: "bed",
      img: "/images/categories/category-bed.jpg",
    },
  ];

  return (
    <>
      <div className="px-5 pb-2 ">
        <h1 className=" font-semibold">Search by Category</h1>

        <div className="row-container" id="slider">
          <div className="rounded-3xl p-2 pr-16 text-white bg-[#222222] w-[170px] h-[120px] max-h-[120px]">
            <Image
              src={"/icons/main/category/categoryMenu.svg"}
              alt={"menu-category"}
              width={44}
              height={24}
            />
            <p className="pl-4">
              All
              <br /> categories
            </p>
          </div>
          {filteredItems.map((item) => (
            <div key={item.id} className=" w-[170px] h-[140px] max-h-[120px]">
              <Link href={"#"}>
                <div className="relative w-[170px] ">
                  <img src={item.img} alt="product" />
                  <h2 className="font-semibold text-black absolute left-5 top-3">
                    {item.description}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategorySlider;
