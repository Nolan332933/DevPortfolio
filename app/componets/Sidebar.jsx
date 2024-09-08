"use client";
import React from "react";
import Image from "next/image";
import Social from "./Social";
import Link from "next/link";
import data from "../../public/data/navbar";
import ProfileImage from "../../public/image/profile2.png";
// import QrCode from "../../public/image/qrcode/whatsapp_qrcode.jpg";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 start-0 mt-10 md:w-2/6 lg:w-1/6">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src={ProfileImage}
            width={200}
            height={200}
            className="border-slate-400 border-4"
            style={{
              borderRadius: "50%",
            }}
            blurDataURL="data:..."
            alt="profile image"
            priority
          />
          <h3 className="font-bold text-slate-200 text-center text-xl mt-3">
            Kaung Myat Kywal
          </h3>
        </div>
        {/* navbar  */}
        <div className="text-center my-10">
          <ul className="list-none">
            {data.map((item) => (
              <li
                key={item.id}
                className={
                  item.link === pathname ||
                  (pathname.startsWith("/project") &&
                    item.link === "/project") ||
                  (pathname.startsWith("/blog/en") && item.link == "blog/en") ||
                  (pathname.startsWith("/blog/my") && item.link == "/blog/en")
                    ? "my-5 text-lg hover:text-red-500 text-red-400"
                    : "my-5 text-lg hover:text-red-500"
                }
              >
                <Link href={item.link}> {item.name} </Link>
              </li>
            ))}
          </ul>
          {/* what's App qrcode  */}
          {/* <Image
            src={QrCode}
            width={100}
            height={100}
            alt="this is whats app qrcode"
            className="shadow-md shadow-slate-400"
          /> */}
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Sidebar;
