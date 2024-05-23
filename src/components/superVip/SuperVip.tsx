"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./SuperVip.css";
import Image from "next/image";

const SuperVip = () => {
  const filteredItems = [
    {
      id: 1,
      description: "smartphone",
      img: "/images/categories/category-smartphone.jpg",
      price: 15000.0,
    },
    {
      id: 2,
      description: "console",
      img: "/images/categories/category-console.jpg",
      price: 2000.0,
    },
    {
      id: 3,
      description: "dog",
      img: "/images/categories/category-dog.jpg",
      price: 750.0,
    },
    {
      id: 4,
      description: "watch",
      img: "/images/categories/category-watch.jpg",
      price: 0.25,
    },
    {
      id: 5,
      description: "boots",
      img: "/images/categories/category-boots.jpg",
      price: 6.5,
    },
    {
      id: 6,
      description: "bicycle",
      img: "/images/categories/category-bicycle.jpg",
      price: 450.0,
    },
    {
      id: 7,
      description: "bed",
      img: "/images/categories/category-bed.jpg",
      price: 112.0,
    },
  ];

  return (
    <>
      <div className="px-5">
        <h1 className="pl-2 font-bold flex flex-row items-center gap-4">
          <span>
            <Image
              src={"/icons/main/superVip/rect.svg"}
              alt={"rect"}
              width={40}
              height={40}
            ></Image>
          </span>
          Super VIP
        </h1>

        <div className="row-container mt-3" id="slider">
          {filteredItems.map((item) => (
            <div key={item.id} className=" w-[190px] h-[250px] max-h-[250px]">
              <Link href={"#"}>
                <div className=" w-[190px] h-[250px]">
                  <img
                    src={item.img}
                    alt="product"
                    className=" min-h-[158px]"
                  />
                  <h2 className="mt-2 font-semibold text-black">
                    {item.description}
                  </h2>
                  <h3 className="mt-5 font-bold">{item.price} ₾</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SuperVip;
