import {z} from "zod";

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
});

export const signInSchema = z.object({
    email: z
        .string({required_error: "Please enter your email address",})
        .email({message: "Please enter a valid email address",}),
    password: z
        .string({required_error: "Please enter your password",})
        .min(8, {message: "Password must be at least 8 characters",}),
});
