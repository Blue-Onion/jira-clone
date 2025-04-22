"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChartNoAxesGantt, PenBox } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="container mx-auto max-w-none px-7 py-3 fixed top-0 z-50 backdrop-blur-sm">
      <nav className="flex h-16 items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo2.png"}
            alt="logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <div className=" flex gap-4">
          <Link href={"/project/create"}>
            <Button variant={"destructive"}>
              <span className="flex items-center">
                <PenBox className="h-4 w-4 mr-2" />
                Create Project
              </span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant={"outline"}>Lock In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
          <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action label="My Organization" labelIcon={<ChartNoAxesGantt/>} onClick={()=>router.push("/onboarding")}/>
          <UserButton.Action label="manageAccount"/>

        </UserButton.MenuItems>
      </UserButton>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
