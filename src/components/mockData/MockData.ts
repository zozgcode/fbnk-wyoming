import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC015',
    holder: {
      firstName: 'Debra',
      lastName: 'Deabreu',
      mobileNumber: '+1-347-435-5523',
      email: 'saythetruth223@outlook.com',
      avatar: 'https://i.imgur.com/pPYcTiA.jpeg',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1700.01,
      saving_balance_usd: 200.21
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832w2762',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'Nov 4, 2024, Checking',
        description: 'Credit from D&D Building',
        status: 'Pending',
        amount_usd: 500000.0
      },
      {
        transaction_id: '002',
        dateTime: 'Oct 25, 2024, Checking',
        description: 'Cheque Deposit',
        status: 'Pending',
        amount_usd: 25000.0
      },
      {
        transaction_id: '003',
        dateTime: 'Sept 23, 2024, Saving',
        description: 'Debit from United Airline',
        status: 'Success',
        amount_usd: -970.0
      },
      {
        transaction_id: '004',
        dateTime: 'Sept 16, 2024, Saving',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -375.52
      },
      {
        transaction_id: '005',
        dateTime: 'Sept 10, 2024, Checking',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -1550.0
      },
      {
        transaction_id: '006',
        dateTime: 'Sept 5, 2024, Checking',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0
      },
      {
        transaction_id: '007',
        dateTime: 'Sept 3, 2024, Checking',
        description: 'Credit from Investment',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        transaction_id: '008',
        dateTime: 'Sept 1, 2024, Checking',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0
      },
    ]
  }
];
