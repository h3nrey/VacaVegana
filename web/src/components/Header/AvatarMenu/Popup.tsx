import { Heart, Plus } from "@phosphor-icons/react";
import Button from "./Button";
import { useEffect, useRef } from "react";

interface iPopup {
    userId: string
    username: string,
    close: (state: boolean) => void
}
export default function Popup({ close, userId, username }: iPopup) {
    const instance = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (instance.current && !instance.current.contains(event.target as Node)) {
                close(false)
                console.log("Monkey")
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);;
    }, []);

    return (
        <div
            ref={instance}
            className="absolute bg-primary-base text-white p-4 pb-6 right-0 rounded-sm 
                shadow-[0_0_15px_rgba(0,0,0,0.25)] gap-1 flex flex-col animate-pop"
        >
            {username}

            <div>
                <Button
                    source={`user/${userId}`}
                    content="receitas salvas" >
                    <Heart size={16} weight="bold" />
                </Button>
                <Button
                    source="new"
                    content="Criar receita" >
                    <Plus size={16} weight="bold" />
                </Button>
            </div>
        </div>
    )
}