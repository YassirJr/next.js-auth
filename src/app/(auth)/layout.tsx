import React from "react";

export default async function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center my-10">
            <div className="w-full max-w-md">
                {
                    children
                }
            </div>
        </div>
    )
}