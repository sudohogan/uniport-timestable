"use client";
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar';

const NameFallback = () => {
    const storedUser = localStorage.getItem("user");
    let user = null;
    if (storedUser) {
        user = JSON.parse(storedUser);
    }
  return (
    <Avatar>
        <AvatarFallback>{`${user?.firstName?.slice(0,1).toUpperCase()}${user?.lastName?.slice(0,1).toUpperCase()}`}</AvatarFallback>
    </Avatar>
  )
}

export default NameFallback