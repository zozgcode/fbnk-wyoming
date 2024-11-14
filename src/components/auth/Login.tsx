'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // Step state to manage form steps

  // Handle next step
  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      // Check if the user exists based on the entered username
      const userAccount = mockAccounts.find(account => account.holder.username === username);
      if (!userAccount) {
        setError('User not found');
        return;
      }
      setError(''); // Clear error if user exists
      setStep(2); // Proceed to the next step
    } else if (step === 2) {
      handleLogin(e);
    }
  };

  // Handle login
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (userAccount?.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  // Go back to the previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="h-screen bg-[white]">
        <div className="pl-5 min-h-[45px] text-white font-[600] text-center bg-[#ad2324] flex items-center justify-center">Online Banking Access</div>
        <div className="mt-3">{error && <p className="text-base text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto max-w-[350px] py-7">
          <form onSubmit={handleNextStep}>
            <div className="flex flex-col gap-6 rounded-lg">
              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={e => setUsername(e.target.value)}
                  />
                  <div className="flex flex-col w-full items-center justify-between gap-2">
                    <button type="submit" className="p-4 py-3 bg-[#223663] w-full text-white font-semibold rounded-md">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-5">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div className="flex w-full items-center justify-between gap-2">
                    <button type="button" onClick={handleBack} className="p-4 py-3 bg-[#ad2324] w-full text-white font-semibold rounded-md">
                      Back
                    </button>
                    <button type="submit" className="p-4 py-3 bg-[#223663] w-full text-white font-semibold rounded-md">
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="border">
          <Image src="https://i.imgur.com/zDPkxB3.png" width={5000} height={5000} className="" alt="logo" />
          <h2 className="text-5xl leading-[60px] text-[#4d4d4d] font-[600] p-5">your better banking experience is here!</h2>
          <Image src="https://i.imgur.com/BmA8UH6.png" width={5000} height={5000} className="" alt="logo" />
          <h2 className="px-5 mt-10 text-center font-[400] text-[#ad2324] text-[1.25rem] leading-[1.5rem]">Construction Loans</h2>
          <p className="px-5 pt-3 text-center font-[400] text-[#4d4d4d] leading-[1.5rem]">Let's make your building dreams becomes a reality. </p>
          <div className="bg-[#25283d] text-center p-5 mt-10">
            <h2 className="text-center font-[400] text-[#ffffff] text-[1.25rem] leading-[1.5rem]">Financial Foundations</h2>
            <p className="text-[#ffffff] text-[1rem] text-center mt-5 leading-[1.5rem]">
              Learn key financial concepts for you or your business with these brief, yet powerful interactive learning experiences.{' '}
            </p>
          </div>
          <footer className="p-5 flex items-center justify-center border-t gap-3 py-[30px]">
            <Image src="https://i.imgur.com/gJvVxBS.jpeg" width={5000} height={5000} className="w-[100px]" alt="logo" />
            <p className="text-[#4d4d4d] text-sm">© 2024 First Bank of Wyoming.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
