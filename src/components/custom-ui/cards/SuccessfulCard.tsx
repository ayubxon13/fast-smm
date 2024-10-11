"use client";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {CheckCircle} from "lucide-react";

type thisProps = {
  title: string;
  desc: string;
  btnText: string;
  open: boolean;
  // onOpenChange: () => void;
};

export default function SuccessfulCard({
  btnText,
  desc,
  title,
  open,
}: thisProps) {
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="max-w-[425px] [&>button]:hidden w-full">
          <DialogHeader className="grid gap-3 justify-items-center">
            <CheckCircle className="w-20 h-20 text-green-500" />
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              className="w-full"
            >
              {btnText}
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
