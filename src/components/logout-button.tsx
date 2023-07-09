"use client";
import React from 'react'
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const router = useRouter();
  const handleLogout = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      localStorage.clear();
    }
    router.push("/login")
  }

  return (
    <button
        className={cn(buttonVariants())}
        type="submit"
        onClick={handleLogout}
        >
        Log out
    </button>
  );
};

export default LogoutButton;


