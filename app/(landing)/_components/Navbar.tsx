"use client";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full pt-8 select-none">
      <NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <h2 className="text-2xl font-bold">Mediacy</h2>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="fley justify-between items-center font-light space-x-14 text-xs">
          {navigationLinks.map((link) => (
            <NavigationMenuItem
              key={link.route}
              className="cursor-ponter hover:underline"
            >
              {link.label}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <Button variant="primary" size="lg">
                Login
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
export default Navbar;
