import React from "react";
import { cn } from "@/src/lib/utils";
import { Dialog } from "../../ui/dialog";
import { DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { Description } from "@radix-ui/react-dialog";
import { FaTwitter } from "react-icons/fa";
import { Button } from "../../ui/button";
import { Form } from "react-hook-form";
import { authFormSchema } from "./schemas";

interface Props {
  className?: string;
  type: string;
  setOpen: (variable: boolean) => void;
}

export const AuthModal: React.FC<Props> = ({ className, type, setOpen }) => {
  console.log("type", type);

  const formSchema = authFormSchema(type);
  return (
    <Dialog open={true} onOpenChange={() => setOpen(false)}>
      <DialogTitle></DialogTitle>
      <DialogContent className={cn("", className)}>
        <section className="">
          <header className="relative flex items-center w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <FaTwitter size={40} color="var(--primary)" />
            </div>
            <Button className="ml-auto rounded-xl">Next</Button>
          </header>
          <h1 className="text-2xl font-bold">{type === "sign-up" ? "Log in to Twitter" : "Create account"}</h1>
          {/* <Form></Form> */}
        </section>
      </DialogContent>
      <Description />
    </Dialog>
  );
};
