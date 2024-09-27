import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {EnterIcon} from "@radix-ui/react-icons";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 items-center" variant="outline">
          Kirish <EnterIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] w-full">
        <DialogHeader className="text-left">
          <DialogTitle className="">Tizimga kirish</DialogTitle>
          <DialogDescription>
            Bizning xizmatlarimizdan foydalanishingiz uchun tizimga kirishingiz
            kerak.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="grid gap-4 pt-4 pb-2">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input name="name" type="text" />
            </div>
            <div className="grid gap-2">
              <Label>Password</Label>
              <Input name="password" type="password" />
            </div>
          </div>
          <DialogDescription className="text-end">
            Parol esdan chiqdimi ?
          </DialogDescription>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
