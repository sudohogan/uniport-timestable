"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export function RegisterForm({ ...className }) {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const elements = form.elements as HTMLFormControlsCollection;

    const firstName = (elements.namedItem("first-name") as HTMLInputElement).value;
    const lastName = (elements.namedItem("last-name") as HTMLInputElement).value;
    const email = (elements.namedItem("email") as HTMLInputElement).value;
    const role = elements.namedItem("role") as HTMLInputElement;
    const selectedRole = role.value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;

    // Store user info in localStorage
    const user = {
      firstName,
      lastName,
      email,
      role: selectedRole,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoading(true);
    // Redirect to the timetable page
    router.push("/uniport-timetable");
    toast({
      title: `Welcome ${user.firstName}`,
    });
  };


  return (
    <div className={cn("grid gap-6", className)}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
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
              required
            />
          </div>
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
              required
            />
          </div>
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
          <RadioGroup className="grid gap-2 py-2" name="role" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="r1" role="student" onChange={() => setRole("student")} />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lecturer" id="r2" role="lecturer" onChange={() => setRole("lecturer")} />
              <Label htmlFor="r2">Lecturer</Label>
            </div>
          </RadioGroup>
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
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <p>Sign Up</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
