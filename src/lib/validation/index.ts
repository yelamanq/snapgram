import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(3, { message: "Name is too short." }),
  username: z.string().min(3, { message: "Username is too short." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
