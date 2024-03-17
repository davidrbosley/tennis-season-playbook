import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";

import paths from "@/paths";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""}>User Image</Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="header">
      <NavbarBrand>
        <Link className="nav-main-link" href="/">
          Tennis Playbook
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="nav-main-link" href={paths.players()}>
            Players
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nav-main-link" href={paths.library()}>
            Library
          </Link>
        </NavbarItem>
      </NavbarContent>
      {authContent}
    </Navbar>
  );
}
