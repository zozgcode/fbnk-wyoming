'use client';
import { Account, Transaction } from '@/utils/types';
import React, { useState } from 'react';
import { formatCurrency } from '../formatCurrency';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

interface TransactionHistoryProps {
  user: Account;
  hideBalance: boolean;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user, hideBalance }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Decide which transactions to display based on showMore state
  const transactionsToShow = showMore ? user.transaction_history : user.transaction_history.slice(0, 6);

  return (
    <div className="">
      {transactionsToShow.length === 0 && <div className="text-sm text-center p-4">No Recent Transaction</div>}
      {transactionsToShow.map((transaction: Transaction) => (
        <div key={transaction.transaction_id} className="flex border-b justify-between py-3">
          <div className="flex gap-2 text-gray-800">
            <div className="flex flex-col gap-1 justify-between">
              <span className="text-[15px] font-[600] truncate max-w-[200px] sm:max-w-full overflow-hidden">{transaction.description}</span>
              <span className="text-[12px] font-medium">{transaction.dateTime}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-between text-right">
            <span className={`text-[13px] font-[600] ${transaction.amount_usd < 0 ? 'text-gray-800' : ''}`}>{hideBalance ? '*****' : `${formatCurrency(transaction.amount_usd)}`}</span>
            <span className={`text-[11px] font-medium ${transaction.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>{transaction.status}</span>
          </div>
        </div>
      ))}

      {/* Toggle button for showing more or less */}
      {user.transaction_history.length > 6 && (
        <button onClick={toggleShowMore} className="text-sm w-full text-sky-700 rounded-lg mt-3 flex items-center justify-center p-3 bg-[#def7f8] font-semibold">
          {showMore ? 'See less' : 'See more'}
        </button>
      )}
    </div>
  );
};

export default TransactionHistory;
