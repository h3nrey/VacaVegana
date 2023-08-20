import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent } from "react";

interface IPcSearchBar {
    inputText: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleText: (text: string) => void
}
export default function PcSearchBar({ inputText, handleInputChange, handleText }: IPcSearchBar) {
    return (
        <div className="md:flex hidden items-center justify-center gap-1">
            <div className="relative">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Achar uma receita"
                    className="rounded-none border-b-2 h-10  border-white bg-transparent px-2 placeholder:text-gray text-white 
                        focus:rounded-sm focus:border-0 focus:bg-white focus:text-primary-base focus:placeholder:text-primary-base ease-in transition-all text-[1.125rem] w-[23rem]"
                />
                {inputText && (
                    <button
                        className="text-primary-light absolute left-full top-1/2 -translate-y-1/2 px-3 -translate-x-full"
                        onClick={() => handleText("")}>
                        <X size={18} weight="bold" />
                    </button>
                )}
            </div>
            <button
                className="hover:bg-white h-10 hover:text-primary-base text-white p-2 rounded-sm transition-colors duration-300 ease-in">
                <MagnifyingGlass size={24} weight="bold" />
            </button>
        </div>
    )
}