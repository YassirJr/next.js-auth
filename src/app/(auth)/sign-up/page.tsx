"use client"
import AuthForm from "@/src/components/auth-form";
import {signUpSchema} from "@/src/lib/zod/schemas";
import {signUpFields} from "@/src/constants";

export default function SignUp() {
    return (
        <AuthForm
            schema={signUpSchema}
            defaultValues={{fullName: "", email: "", password: ""}}
            onSubmit={() => {
                return Promise.resolve({success: true});
            }}
            fields={signUpFields}
            title="Welcome back to BookWise"
            description="Access the vast collection of resources, and stay updated"
            submitText="Sign Up"
        />
    );
}