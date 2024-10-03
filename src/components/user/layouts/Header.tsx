"use client";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {TextAlignRightIcon} from "@radix-ui/react-icons";
import {ToggleTheme} from "../ui/ToggleTheme";
import Login from "../auth/Login";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed backdrop-blur-lg top-0 left-0 w-full z-50 shadow-md">
        <div className="max-container flex items-center justify-between">
          <Button className="p-0" variant="link" asChild>
            <Link className="text-xl font-medium" href="/">
              Nakrutka.uz
            </Link>
          </Button>
          <div className="flex gap-9 items-center">
            <div className="md:flex hidden items-center">
              <Button asChild variant="ghost">
                <Link href="#statistics">Statistika</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="#services">Xizmatlar</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="#about-us">Biz haqimizda</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Login />
              <ToggleTheme />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="md:hidden visible" asChild>
                  <Button size="icon" className="px-2" variant="outline">
                    <TextAlignRightIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent className="pt-11" side="left">
                  <SheetHeader>
                    <Link
                      className="text-start"
                      href="#statistics"
                      onClick={handleClose}
                    >
                      <Button variant="link" onClick={handleClose}>
                        <SheetTitle>Statistika</SheetTitle>
                      </Button>
                    </Link>
                    <Link
                      className="text-start"
                      href="#services"
                      onClick={handleClose}
                    >
                      <Button variant="link" onClick={handleClose}>
                        <SheetTitle>Xizmatlar</SheetTitle>
                      </Button>
                    </Link>
                    <Link
                      className="text-start"
                      href="#about-us"
                      onClick={handleClose}
                    >
                      <Button variant="link" onClick={handleClose}>
                        <SheetTitle>Biz haqimizda</SheetTitle>
                      </Button>
                    </Link>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <Separator />
      </header>
    </>
  );
}
