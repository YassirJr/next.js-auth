import SignInGithub from "@/src/components/sign-in-github";
import {auth} from "@/auth";
import {SignOut} from "@/src/components/sign-out";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    session ? <SignOut/> : <SignInGithub/>
  );
}
