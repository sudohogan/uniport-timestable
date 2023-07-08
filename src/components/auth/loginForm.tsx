"use client"
import React, { useState } from 'react';
import { Icons } from '../icons';
import { buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { cn } from '@/lib/utils';
import { useRouter } from "next/navigation";
import { useToast } from '../ui/use-toast';

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const elements = form.elements as HTMLFormControlsCollection;

    const email = (elements.namedItem("email") as HTMLInputElement).value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;

    // Get user information from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        setIsLoading(true);
        // Redirect to the timetable page
        router.push("/uniport-timetable");
        toast({
          description: `Welcome back ${user.firstName}`,
        });
      } else if (user.email !== email) {
        setErrorMessage("User not found");
      } else {
        setErrorMessage("Invalid email or password");
      }
    }else{
      setErrorMessage("User not found! Please register")
    }
    setIsLoading(false);
  };

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
            {errorMessage && (
              <p className="p-1 text-xs text-red-600">{errorMessage}</p>
            )}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <p>Log In</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
