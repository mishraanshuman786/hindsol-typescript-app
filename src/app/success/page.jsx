"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";


export default function Success() {
  const router = useRouter();

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        router.push('/');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, counter]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 z-0 animate-flicker" />
      <Image
        src="/assets/payment.gif"
        alt="Payment Success"
        width="400"
        height="400"
      />
      <h1 className="mt-6 text-2xl font-semibold text-gray-900 z-10">
        Payment Successfull.
      </h1>
      <p className="mt-3 text-lg text-gray-600 z-10">
        You will be redirected to the SkillDev page in {counter} seconds.
      </p>
    </div>
  );
}