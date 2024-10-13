"use client";
import SuccessfulCard from "@/components/custom-ui/cards/SuccessfulCard";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useLogin} from "@/hooks/useLogin";
import {ReloadIcon} from "@radix-ui/react-icons";
import {FormEvent} from "react";

type thisProps = {
  show: boolean;
  onOpenChange(open: boolean): void;
  onSignUpClick(): void;
  onForgotPasswordClick(): void;
};

export default function Login({
  onOpenChange,
  onForgotPasswordClick,
  onSignUpClick,
  show,
}: thisProps) {
  const {login, success, loading} = useLogin();
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await login(formData);
  };

  return (
    <>
      {success || (
        <Dialog onOpenChange={onOpenChange} open={show}>
          <DialogContent className="max-w-[425px] w-full">
            <DialogHeader className="text-left">
              <DialogTitle>Tizimga kirish</DialogTitle>
              <DialogDescription>
                Bizning xizmatlarimizdan foydalanishingiz uchun tizimga
                kirishingiz kerak.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 pt-4 pb-2" onSubmit={handleLogin}>
              <div>
                <div className="grid gap-4 pt-4 pb-2">
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="text"
                      required // Added required attribute
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Password</Label>
                    <Input name="password" type="password" required />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    className="p-0 m-0"
                    variant="link"
                    onClick={onSignUpClick}
                  >
                    {"Hisobingiz yo'qmi?"}
                  </Button>
                  <Button variant="link" className="cursor-pointer m-0 p-0" asChild>
                    <DialogDescription onClick={onForgotPasswordClick}>
                      Parol esdan chiqdimi?
                    </DialogDescription>
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button disabled={loading} type="submit">
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Kirish
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
      <SuccessfulCard
        btnText="dewd"
        desc="dewdwedw"
        open={success}
        title="dewdw"
      />
    </>
  );
}
