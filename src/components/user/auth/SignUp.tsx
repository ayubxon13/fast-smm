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

type thisProps = {
  show: boolean;
  onOpenChange(open: boolean): void;
  onSignUpClick(): void;
};

export default function SignUp({show, onOpenChange, onSignUpClick}: thisProps) {
  const {signup, success} = useSignup();
  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const {success, error} = await signup(formData);

    if (!success) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <>
      {success || (
        <Dialog onOpenChange={onOpenChange} open={show}>
          <DialogContent className="max-w-[425px] w-full">
            <DialogHeader className="text-left">
              <DialogTitle className="">{`Ro'yhatdan o'tish`}</DialogTitle>
              <DialogDescription>
                Bizning xizmatlarimizdan foydalanishingiz uchun tizimga
                kirishingiz kerak.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSignup}>
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
                    <Input
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
                    Hisobingiz bormi?
                  </Button>
                  <DialogDescription>Parol esdan chiqdimi?</DialogDescription>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Kirish</Button>
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
