import {signIn} from "@/auth";
import {signIn as clt} from "next-auth/react";
import {SignInResponse} from "next-auth/react";

export const authService = {
    credentials: async <T>(credentials: T): Promise<SignInResponse | undefined> => {
        return await clt("credentials", {
            redirect: true,
            redirectTo: "/",
            ...credentials
        })
    },
    oauth: {
        github: async (): Promise<void> => {
            "use server"
            await signIn("github", {
                redirect: true,
                redirectTo: "/"
            })
        },
    }
}