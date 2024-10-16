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
import {useSignup} from "@/hooks/useSignup";
import {formatPhoneNumber} from "@/utils/utils";
import {ReloadIcon} from "@radix-ui/react-icons";
import {ChangeEvent, useState} from "react";
import {toast} from "sonner";

type thisProps = {
  show: boolean;
  onOpenChange(open: boolean): void;
  onLoginClick(): void;
};

export default function SignUp({show, onOpenChange, onLoginClick}: thisProps) {
  const {signup, success, loading} = useSignup();
  const [phone, setPhone] = useState("+998 ");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (phone.length < 16) {
      toast.error("Telefon raqami to'g'ri kiritilmadi.");
      return;
    } else {
      setPhoneError(null);
    }

    await signup(formData);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value.startsWith("+998")) {
      return;
    }

    const formattedPhone = formatPhoneNumber(value);
    setPhone(formattedPhone);

    if (phoneError) {
      setPhoneError(null);
    }
  };

  return (
    <>
      {success || (
        <Dialog onOpenChange={onOpenChange} open={show}>
          <DialogContent className="max-w-[425px] w-full">
            <DialogHeader className="text-left">
              <DialogTitle>{`Ro'yhatdan o'tish`}</DialogTitle>
              <DialogDescription>
                Bizning xizmatlarimizdan foydalanishingiz uchun tizimga
                kirishingiz kerak.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSignup}>
              <div>
                <div className="grid gap-4 pt-4 pb-2">
                  <div className="grid gap-2">
                    <Label>Foydalanuvchi nomi</Label>
                    <Input name="username" type="text" required />
                  </div>
                  <div className="grid gap-2">
                    <Label>Telefon raqam</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+998 90 123 45 67"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input name="email" type="text" required />
                  </div>
                  <div className="grid gap-2">
                    <Label>Parol</Label>
                    <Input name="password" type="password" required />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    className="p-0 m-0"
                    variant="link"
                    onClick={onLoginClick}
                  >
                    Hisobingiz bormi?
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button disabled={loading} type="submit">
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {"RO'YHATDAN O'TISH"}
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
