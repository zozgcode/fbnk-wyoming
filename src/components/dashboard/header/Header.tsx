"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[400px] bg-[#2b4461]">
      
    </div>
  );
}
