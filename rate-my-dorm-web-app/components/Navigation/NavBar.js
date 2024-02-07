import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import ProfileNavBar from "@/components/Navigation/ProfileNavBar";
import AnonymousNavBar from "@/components/Navigation/AnonymousNavBar";
import NavButton from "@/components/Navigation/NavButton";

import { CurrentUserContext } from "@/providers/CurrentUserProvider";

import Link from "next/link";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const { currentUser } = useContext(CurrentUserContext);
    
    const router = useRouter();
    
    useEffect(() => {
        if (currentUser) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [currentUser])

    if (router.pathname === "/login" || router.pathname === "/register") return null;

    return (
        <div className="flex flex-row justify-between w-full gap-10 p-5 px-10">
            <Link href="/" children=<NavButton text="Home"/> onClick={(e) => router.pathname === "/" ? e.preventDefault() : null} />

            {!!isActive ? <ProfileNavBar user={currentUser} /> : <AnonymousNavBar />}
        </div>
    )
}

export default Navbar;