"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Success() {
  const router = useRouter();

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        router.push('/skillDev');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, counter]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-800">
      <Image
        src="/assets/payment-success.gif"
        alt="Payment Success"
        width="128"
        height="128"
      />
      <h1 className="mt-6 text-2xl font-semibold text-white">
        Payment Successfull.
      </h1>
      <p className="mt-3 text-lg text-white">
        You will be redirected to the SkillDev page in {counter} seconds.
      </p>
    </div>
  );
}