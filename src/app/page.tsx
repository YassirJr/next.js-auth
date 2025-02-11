import Link from "next/link";

export default function Home() {
    return (
        <nav>
            <Link href="/sign-in">
                Sign In
            </Link>
            <Link href="/sign-up">
                Sign Up
            </Link>
        </nav>
    );
}
