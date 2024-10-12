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
import {useForgotPassword} from "@/hooks/useForgotPassword";
import {ReloadIcon} from "@radix-ui/react-icons";

type thisProps = {
  show: boolean;
  onOpenChange(open: boolean): void;
};

export default function ForgotPassword({onOpenChange, show}: thisProps) {
  const {forgotPassword, success, loading} = useForgotPassword();

  const handleForgotPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    await forgotPassword(email);
  };

  return (
    <>
      {success || (
        <Dialog onOpenChange={onOpenChange} open={show}>
          <DialogContent className="max-w-[425px] w-full">
            <DialogHeader className="text-left">
              <DialogTitle>Parolingizni esdan chiqardingizmi ?</DialogTitle>
              <DialogDescription>Biz sizga yuboramiz !</DialogDescription>
            </DialogHeader>
            <form className="grid gap-2" onSubmit={handleForgotPassword}>
              <div className="pt-4 pb-2">
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input name="email" type="text" required />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={loading} type="submit">
                  {loading ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Kuting
                    </>
                  ) : (
                    <>{"Jo'natish"}</>
                  )}
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
        title="Password reset email sent successfully!"
      />
    </>
  );
}
