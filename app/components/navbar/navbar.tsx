"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-8">
      <h3 className="hover:underline">
        <Link href="/">Home</Link>
      </h3>
      <h3 className="hover:underline">
        <Link href="/users">Users</Link>
      </h3>
      <h3 className="hover:underline">
        <Link href="/admin">Admin</Link>
      </h3>
      {status === "unauthenticated" && (
        <h3 className="hover:underline">
          <Link href="/api/auth/signin">Sign in</Link>
        </h3>
      )}
      {status === "authenticated" && (
        <h3 className="text-green-500">
          <div>{session.user!.name}</div>
        </h3>
      )}
    </div>
  );
};

export default Navbar;
