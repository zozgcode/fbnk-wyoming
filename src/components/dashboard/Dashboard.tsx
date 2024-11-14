'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account, Transaction } from '@/utils/types';
import Link from 'next/link';
import TransactionHistory from './TransactionHistory';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { IoIosArrowForward } from 'react-icons/io';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { BillIcon, CardIcon } from '../svgIcons';
import Image from 'next/image';
import { ArrowRightLeft, Receipt } from 'lucide-react';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setSideBalance] = useState(false);

  const toggleHideBalance = () => {
    setSideBalance(true);
  };

  const toggleShowBalance = () => {
    setSideBalance(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const date = new Date();
  const hour = date.getHours();

  const formattedDate = getFormattedDate();

  return (
    <div className="">
      {/* <Header handleLogout={handleLogout} user={user} /> */}
      <div className="w-full min-h-[490px] p-5 pt-[40px] bg-[#2b4461]">
        <p className="text-white mb-3">{formattedDate}</p>
        <div className="flex justify-between items-center">
          <h5 className="text-white text-[25px] font-bold">Hi, {user.holder.firstName}</h5>
          <Link href="/dashboard/profile">
            <Image src={`${user.holder.avatar ? user.holder.avatar : 'https://i.imgur.com/GXyn25g.jpeg'}`} width={230} height={28} className="w-10 h-10 rounded-full" alt="logo" />
          </Link>
        </div>
        <div className="mt-2">
          <p className="text-white font-semibold">Accounts</p>
          <div className="bg-[#2a72be91] flex justify-between items-center rounded-[8px] p-3 px-4 mt-3">
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold">Checking</span>
              <span className="text-white text-xs">x1234</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold">{formatCurrency(user.bank_details.balance_usd)}</span>
              <span className="text-white text-xs text-right">Available</span>
            </div>
          </div>

          <div className="bg-[#2a72be91] flex justify-between items-center rounded-[8px] p-3 px-4 mt-3">
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold">Savings</span>
              <span className="text-white text-xs">x1234</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold">{user.bank_details.saving_balance_usd !== undefined ? formatCurrency(user.bank_details.saving_balance_usd) : 'N/A'}</span>{' '}
              <span className="text-white text-xs text-right">Available</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            <Link href="/dashboard/transfer" className="bg-[#646464] shadow-lg flex flex-col gap-1 items-center justify-center text-white w-[85px] h-[70px] rounded-[13px]">
              <ArrowRightLeft />
              <span className="text-sm">Transfer</span>
            </Link>
            <Link href="/dashboard/bill-payment" className="bg-[#646464] shadow-lg flex flex-col gap-1 items-center justify-center text-white w-[85px] h-[70px] rounded-[13px]">
              <Receipt />
              <span className="text-sm">Bills</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="relative -top-[90px] shadow-md border rounded-[20px] p-5 bg-white">
          <div className="flex items-center justify-between mb-5">
            <p className="text-lg font-semibold">Transactions</p>
            <Link href="/dashboard/transactions" className="text-sm font-semibold">
              View all
            </Link>
          </div>
          <TransactionHistory user={user} hideBalance={hideBalance} />
        </div>
      </div>
    </div>
  );
}
