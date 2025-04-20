import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className="">
            <Link href="/">

            </Link>
        </nav>
      <SignedOut>
        <SignInButton>
            sign IN Bitcgh
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton  />
        </SignedIn>    
        </header>
  )
}

export default Navbar
