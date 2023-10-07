import { WarningCircle } from "@phosphor-icons/react";

export default function InputError({ message }: { message: string }) {
    return (
        <div className="text-yellow mt-1">
            <WarningCircle weight="bold" size={20} className="inline" />
            <span className="inline ml-2">{message}</span>
        </div>
    )
}