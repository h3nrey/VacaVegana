import { WarningCircle, X } from "@phosphor-icons/react";

export default function ErrorToast({ message }: { message: string }) {
    return (
        <div
            className="animate-toastPop flex origin-left gap-2 font-bold bg-yellow text-[1.125rem] text-white py-4 pl-6 rounded-sm"
        >
            <WarningCircle size={28} weight="bold" />
            {message}
        </div>
    )
}