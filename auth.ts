import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";
import {compare} from "bcryptjs";
import {signInSchema} from "@/src/lib/zod/schemas";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        Google,
        GitHub,
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                try {
                    const {email, password} = await signInSchema.parseAsync(credentials);

                    const user = await prisma.user.findUnique({
                        where: {email},
                    });

                    if (!user) {
                        return null;
                    }

                    const passwordValid = await compare(password, user.password);

                    if (!passwordValid) {
                        return null;
                    }

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email,
                    };
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.id as string;
            session.user.name = token.name;
            session.user.email = token.email as string;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});