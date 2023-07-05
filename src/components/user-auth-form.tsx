"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useRouter } from "next/navigation";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isLogin?: boolean;
}

export function UserAuthForm({ className, isLogin = false }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)}>
      <form 
      >
        <div className="grid gap-2">
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="first-name">
                First Name
              </Label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          )}
          {!isLogin && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="last-name">
                Last Name
              </Label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          )}
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
            />
          </div>
          {!isLogin && (
            <RadioGroup className="grid gap-2 py-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lecturer" id="r2" />
                <Label htmlFor="r2">Lecturer</Label>
              </div>
            </RadioGroup>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading} type="submit">
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ): (
              <>
                {!isLogin ? "Sign Up" : "Log In"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
