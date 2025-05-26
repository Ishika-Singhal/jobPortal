"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = ({ user }) => {
  const menuItems = [
    {
      label: "Home",
      href: "/",
      show: true,
    },
    {
      label: "Login",
      href: "sign-up",
      show: !user,
    },
    {
      label: "Register",
      href: "sign-in",
      show: !user,
    },
    {
      label: "Jobs",
      href: "jobs",
      show: user,
    },
    {
      label: "Activity",
      href: "activity",
      show: user,
    },
    {
      label: "Membership",
      href: "membership",
      show: user,
    },
    {
      label: "Account",
      href: "account",
      show: user,
    },
  ];

  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        {/* mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="mr-6 hidden lg:flex">
              <h3>JOBSCO</h3>
            </Link>
            <div className="grid gap-2 py-6 px-6">
              {menuItems.map((menuitem, index) =>
                menuitem.show ? (
                  <Link
                    href={menuitem.href}
                    key={index}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {menuitem.label}
                  </Link>
                ) : null
              )}
              <UserButton afterSwitchSessionUrl="/"/>
            </div>
          </SheetContent>
        </Sheet>

        {/* desktop navigation */}
        <Link className="hidden lg:flex mr-6" href="/">
          JOBSCO
        </Link>
        <nav className="hidden ml-auto lg:flex gap-6">
          {menuItems.map((menuitem, index) =>
            menuitem.show ? (
              <Link
                href={menuitem.href}
                key={index}
                className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-md"
              >
                {menuitem.label}
              </Link>
            ) : null
          )}
          <UserButton afterSwitchSessionUrl="/"/>
        </nav>
      </header>
    </div>
  );
};

export default Header;
