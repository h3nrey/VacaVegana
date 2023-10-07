"use client"
import { User } from "@phosphor-icons/react";
import Image from "next/image";
import Button from "./Button";
import Popup from "./Popup";
import { useState } from "react";

interface props {
    id: string
    username: string
    avatarUrl: string
}

export default function AvatarMenu({ id, avatarUrl, username }: props) {
    const [showPopup, setShowPopup] = useState(false);

    function handlePopup() {
        if (showPopup) {
            setShowPopup(false);
        } else {
            setShowPopup(true)
        }
    }

    return (
        <div className="relative">
            <button onClick={handlePopup} className="rounded-full w-10 h-10 overflow-hidden">
                {avatarUrl ? (
                    <img
                        className=" w-full h-full object-cover"
                        src={avatarUrl}
                        width={40} height={40} alt=""
                    />
                ) : (
                    <span className="w-full h-full flex items-center justify-center bg-white text-primary-base">
                        <User size={24} weight="bold" />
                    </span>
                )}
            </button>

            {showPopup && (
                <Popup userId={id} username={username} close={setShowPopup} />
            )}
        </div >
    )
}