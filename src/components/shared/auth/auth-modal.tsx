import React from "react";
import { cn } from "@/src/lib/utils";
import { Dialog } from "../../ui/dialog";
import { DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { Description } from "@radix-ui/react-dialog";
import { FaTwitter } from "react-icons/fa";
import { Button } from "../../ui/button";
import { Form, FormProvider, useForm } from "react-hook-form";
import { AuthFormValues, loginFormSchema, registerFormSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "./form-input";

interface Props {
  className?: string;
  type: "sign-up" | "sign-in";
  setOpen: (variable: boolean) => void;
}

export const AuthModal: React.FC<Props> = ({ className, type, setOpen }) => {
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(type === "sign-up" ? registerFormSchema : loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: type === "sign-up" ? "" : undefined,
      confirmPassword: type === "sign-up" ? "" : undefined,
    },
  });

  const onSubmit = async (data: AuthFormValues) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.error("Error while execution value:", error);
    }
  };

  return (
    <Dialog open={true} onOpenChange={() => setOpen(false)}>
      <DialogTitle></DialogTitle>
      <DialogContent className={cn("w-[700px] min-h-[400px]", className)}>
        <section className="">
          <header className="flex items-center justify-center mb-8">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <FaTwitter size={40} color="var(--primary)" />
            </div>
            <Button className="ml-auto rounded-full font-bold" type="submit">
              {type === "sign-up" ? "Sign up" : "Sign in"}
            </Button>
          </header>
          <h1 className="text-2xl font-bold mb-4 text-[#131619]">
            {type === "sign-up" ? "Create your account" : "Log in to Twitter"}
          </h1>
          <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
              {type === "sign-up" && (
                <>
                  <FormInput name="name" label="Name" />
                  <FormInput name="email" label="E-mail" />
                  <FormInput name="password" label="Password" type="password" />
                  <FormInput name="confirmPassword" label="Confirm Password" type="password" />
                </>
              )}
              {type === "sign-in" && (
                <>
                  <FormInput name="email" label="E-mail" />
                  <FormInput name="password" label="Password" type="password" />
                </>
              )}
            </form>
          </FormProvider>
        </section>
      </DialogContent>
      <Description />
    </Dialog>
  );
};
