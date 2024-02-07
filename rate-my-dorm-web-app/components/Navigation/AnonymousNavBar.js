import NavButton from "@/components/Navigation/NavButton";

import Link from "next/link";

const AnonymousNavBar = () => {

    return (
        <div className="flex flex-row gap-10">
            <Link href="/login" children=<NavButton text="Login"/> />
            <Link href="/register" children=<NavButton text="Register"/> />
        </div>
    )
}

export default AnonymousNavBar;