"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  children,
  href,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors sm:text-sm md:text-sm duration-200 text-gray-600 hover:text-[#686ac7]",
        className,
        isActive && "text-[#686ac7]"
      )}
    >
      {children}
    </Link>
  );
}
