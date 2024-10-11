"use client";
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
import {login} from "@/lib/auth-actions"; // Ensure this imports correctly.
import {useState} from "react";

type ThisProps = {
  show: boolean;
  onOpenChange(open: boolean): void;
  onSignUpClick(): void;
};

export default function Login({onOpenChange, onSignUpClick, show}: ThisProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog onOpenChange={onOpenChange} open={show}>
      <DialogContent className="max-w-[425px] w-full">
        <DialogHeader className="text-left">
          <DialogTitle>Tizimga kirish</DialogTitle>
          <DialogDescription>
            Bizning xizmatlarimizdan foydalanishingiz uchun tizimga kirishingiz
            kerak.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div>
            <div className="grid gap-4 pt-4 pb-2">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  name="email"
                  type="text"
                  required // Added required attribute
                />
              </div>
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  name="password"
                  type="password"
                  required // Added required attribute
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button
                className="p-0 m-0"
                variant="link"
                onClick={onSignUpClick}
              >
                {"Hisobingiz yo'qmi?"}
              </Button>
              <DialogDescription>Parol esdan chiqdimi?</DialogDescription>
            </div>
          </div>
          <DialogFooter>
            <Button formAction={login} type="submit">
              Kirish
            </Button>{" "}
            {/* Changed button text to 'Kirish' */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
