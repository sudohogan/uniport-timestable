"use client"
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedPage= ({ children }: {children: ReactNode}) => {
    const router = useRouter();
    const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } else {
          router.push('/404');
        }
    }, [router]);
    
    if (!user?.firstName || !user?.lastName) {
        return null; // Render nothing while waiting for the redirection
    }

    return <div>{children} </div>
};

export default ProtectedPage;
