import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutPanelTop } from "lucide-react";
import NavLink from "./nav-link";

export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 px-4 lg:px-8  mx-auto">
      <div>
        <NavLink href="/" className="flex flex-row gap-1 items-center">
          <LayoutPanelTop className="h-5 w-5 hover:rotate-12 tranform transition duration-300 ease-in-out" />
          Structura
        </NavLink>
      </div>
      <div>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>
      {/* Should I make this a protectde route or should I make this route available selectively based on Login or not? */}
      {/* TODO: Make the decision above */}
      <div>
        <NavLink href="/dashboard">Your Dashboard</NavLink>
      </div>
      {isLoggedIn ? (
        <div className="flex gap-2 items-center">
          <NavLink href="/structure">Deconstruct</NavLink>
          <div>Pro</div>
          <Button>Sign out</Button>
        </div>
      ) : (
        <div className="hidden sm:block">
          <Button>Sign-In</Button>
        </div>
      )}
    </nav>
  );
}
