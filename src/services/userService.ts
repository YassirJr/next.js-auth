import {prisma} from "@/src/lib/prisma";

export const userService = {
    findByEmail: async (email: string) =>
         prisma.user.findUnique({
            where: {
                email
            }
        })
}