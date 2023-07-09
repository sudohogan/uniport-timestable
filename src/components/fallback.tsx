"use client";
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback } from './ui/avatar';

const NameFallback = () => {
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <Avatar>
      {user && <AvatarFallback>{`${user?.firstName.slice(0,1).toUpperCase()}${user?.lastName.slice(0,1).toUpperCase()}`}</AvatarFallback>}
      {!user && <AvatarFallback>N/A</AvatarFallback>}
    </Avatar>
  );
};

export default NameFallback;


