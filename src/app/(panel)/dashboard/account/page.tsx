"use client";
import UserProfile from "@/components/custom-ui/UserProfile";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {ToggleTheme} from "@/components/user/ui/ToggleTheme";
import {useGetUser} from "@/hooks/useGetUser";
import {useUpdateUserCredentials} from "@/hooks/useUpdateUserData";
import {ReloadIcon, TextAlignRightIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {FormEvent, useState} from "react";

export default function Account() {
  const {loading, userData} = useGetUser();
  const [isOpen, setIsOpen] = useState(false);
  const {updateUserCredentials} = useUpdateUserCredentials();

  const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    await updateUserCredentials(formData);
  };

  return (
    <>
      <div className="w-full">
        <div className="h-[60px] bg-muted/40 px-6 grid border-b">
          <div className="flex items-center">
            <div className="md:hidden visible">
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
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="link" onClick={() => setIsOpen(false)}>
                        <SheetTitle>Statistika</SheetTitle>
                      </Button>
                    </Link>
                    <Link
                      className="text-start"
                      href="#services"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="link" onClick={() => setIsOpen(false)}>
                        <SheetTitle>Xizmatlar</SheetTitle>
                      </Button>
                    </Link>
                    <Link
                      className="text-start"
                      href="#about-us"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="link" onClick={() => setIsOpen(false)}>
                        <SheetTitle>Biz haqimizda</SheetTitle>
                      </Button>
                    </Link>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex items-center sm:gap-10 gap-3 ml-auto">
              <p className="text-slate-100 sm:text-base text-sm flex items-center gap-2">
                Balance: {userData?.user_metadata?.balance ?? 1}{" "}
                <span className="font-bold">uzs</span>
              </p>
              <div className="flex items-center gap-2">
                <ToggleTheme />
                {loading ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : userData ? (
                  <UserProfile userData={userData} />
                ) : (
                  <p>error</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="grid gap-5">
            <form onSubmit={handleUserUpdate} className="grid gap-5">
              <Card className="p-3 grid gap-2">
                <Label>Username</Label>
                <Input
                  defaultValue={userData?.user_metadata.username}
                  name="username"
                  type="text"
                  required
                />
              </Card>
              <Card className="p-3 grid gap-5">
                <div className="grid gap-2">
                  <Label>Current password</Label>
                  <Input
                    defaultValue={userData?.user_metadata.password}
                    name="current-password"
                    type="password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>New password</Label>
                  <Input name="new-password" type="password" />
                </div>
                <Button type="submit">Change password</Button>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
