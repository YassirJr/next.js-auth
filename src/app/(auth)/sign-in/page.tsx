import AuthForm from "@/src/components/auth-form";
import {signInFields} from "@/src/constants";
import {signInDefaultValues} from "@/src/lib/zod/schemas";
import {githubAuth, googleAuth} from "@/src/services/authService";

export default function SignIn() {
    return (
        <AuthForm
            type="signin"
            defaultValues={signInDefaultValues}
            fields={signInFields}
            auth={
                {
                    oauth: {
                        github: {
                            enabled: true,
                            handler: githubAuth
                        },
                        google: {
                            enabled: true,
                            handler: googleAuth
                        }
                    }
                }
            }
        />
    );
}