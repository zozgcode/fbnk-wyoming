"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="relative flex items-center justify-center bg-white p-[15px] py-[20px] pt-[40px]">
      <Image src="https://i.imgur.com/mBOzjG2.png" width={5000} height={5000} className="w-[220px]" alt="logo" />
    </div>
  );
}
