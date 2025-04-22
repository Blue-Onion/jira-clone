import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="">
        <Link href="/">
          <Image src={"/logo2.png"} alt="logo" width={200} height={40} />
        </Link>
      </nav>
      <SignedOut>
        <SignInButton>sign IN Bitcgh</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
