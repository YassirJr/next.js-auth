"use client"
import AuthForm from "@/src/components/auth-form";
import {signInSchema} from "@/src/lib/zod/schemas";
import {signInFields} from "@/src/constants";

export default function SignIn(){
    return (
        <AuthForm
            schema={signInSchema}
            defaultValues={{ email: "", password: "" }}
            onSubmit={() => {
                console.log("salam");
                return Promise.resolve({ success: true });
            }}
            fields={signInFields}
            title="Welcome back to BookWise"
            description="Access the vast collection of resources, and stay updated"
            submitText="Sign In"
        />
    );
}