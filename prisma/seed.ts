import {prisma} from "@/src/lib/prisma";
import {hash} from "bcryptjs";


async function main() {
    await prisma.user.createMany(
        {
            data: [
                {
                    name: "Admin",
                    email: "admin2@gmail.com",
                    password: await hash("password", 10),
                },
                {
                    name: "User",
                    email: "user@gmail.com",
                    password: await hash("password", 10),
                }
            ]
        }
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })