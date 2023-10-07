"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import Nav from "./Header/Nav";
import SearchBar from "./Header/SearchBar";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import PcSearchBar from "./Header/PcSearchBar";
import AvatarMenu from "./Header/AvatarMenu/AvatarMenu";
import { User } from "@/lib/constants";
import LoginLink from "./Header/LoginLink";

interface props {
    user: User | null
}
export default function Header({ user }: props) {
    const [showBar, setShowBar] = useState(false);

    return (
        <div className="bg-primary-base flex justify-between px-4 py-2 font-sans">
            {/* Left  */}
            {!showBar && (
                <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
                    <Logo color="branca" height={[48, 64]} />
                    <Nav />
                </div>
            )}

            {/* Right  */}
            <div className="flex gap-2 items-center">
                <SearchBar barState={showBar} setBarState={setShowBar} />
                {user ? (
                    <AvatarMenu
                        id={user.id}
                        username={user.username}
                        avatarUrl={user.avatarURL}
                    />
                ) : (
                    <LoginLink />
                )}

            </div>
        </div>
    )
}