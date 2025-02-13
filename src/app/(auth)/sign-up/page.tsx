import AuthForm from "@/src/components/auth-form";
import {signUpDefaultValues} from "@/src/lib/zod/schemas";
import {signUpFields} from "@/src/constants";

export default function SignUp() {
    return (
        <AuthForm
            type="signup"
            defaultValues={signUpDefaultValues}
            fields={signUpFields}
        />
    );
}

