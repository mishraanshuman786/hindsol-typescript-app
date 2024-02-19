"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/skillDev');
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <Image
        src="/images/payment-success.svg"
        alt="Payment Success"
        width="128"
        height="128"
      />
      <h1 className="mt-6 text-2xl font-semibold text-gray-900">
        Payment Successfull.
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        You will be redirected to the SkillDev page in 10 seconds.
      </p>
    </div>
  );
}