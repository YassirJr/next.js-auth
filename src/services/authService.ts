"use server"

import {signIn} from "@/auth";
import {SignInResponse} from "next-auth/react";

 export async function credentialsAuth<T>(values: T): Promise<SignInResponse> {
    return await signIn("credentials", {
        redirect: true,
        redirectTo: "/",
        ...values,
    });
}

 export async function githubAuth(): Promise<SignInResponse> {
    return await signIn("github", {
        redirect: true,
        redirectTo: "/",
    });
}

export async function googleAuth(): Promise<SignInResponse> {
    return await signIn("google", {
        redirect: true,
        redirectTo: "/",
    });
}