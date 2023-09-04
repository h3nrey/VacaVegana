"use client"
import { Heart, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import Button from "./Button";
import Popup from "./Popup";
import { useState } from "react";

export default function AvatarMenu() {
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
            <button onClick={handlePopup}>
                <Image
                    className="rounded-full w-10 h-10 object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/800px-Dwayne_Johnson_2014_%28cropped%29.jpg"
                    width={40} height={40} alt=""
                />
            </button>

            {showPopup && (
                <Popup close={setShowPopup} />
            )}
        </div >
    )
}