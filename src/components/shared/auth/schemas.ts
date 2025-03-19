import { z } from "zod";

export const authFormSchema = (type: string) =>
  z.object({
    //sign up
    firstName: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    phoneNumber: z.string().min(8),
    //both
    
  });
