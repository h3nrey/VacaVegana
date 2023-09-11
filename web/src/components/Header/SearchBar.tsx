"use client"
import { ArrowLeft, MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import PcSearchBar from "./PcSearchBar";

interface ISearchBar {
    barState: boolean
    setBarState: (state: boolean) => void;
}
export default function SearchBar({ barState, setBarState }: ISearchBar) {
    const [searchText, setSearchText] = useState("");

    function handleSearchtext(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }
    return (
        <div className="flex">
            <div className="flex md:hidden">
                {barState ? (
                    <div className="flex gap-3 h-full items-center w-full">
                        <button
                            onClick={() => setBarState(false)}
                        >
                            <ArrowLeft size={24} weight="bold" className="text-white" />
                        </button>

                        <div className="relative w-full">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearchtext}
                                placeholder="Achar receita"
                                className="border-b-2 border-white bg-transparent placeholder:text-gray text-white h-8 w-full"
                            />

                            {searchText && (
                                <button
                                    onClick={() => setSearchText("")}
                                    className="absolute left-full -translate-x-full px-2 top-0 translate-y-1/2"
                                >
                                    <X size={16} className="text-gray" weight="bold" />
                                </button>
                            )}

                        </div>

                        <button className="b-2">
                            <MagnifyingGlass size={24} className="text-white" />
                        </button>
                    </div>

                ) : (
                    <button
                        className="p-2 rounded-sm"
                        onClick={() => setBarState(true)}
                    >
                        <MagnifyingGlass size={24} weight="bold" className="text-white" />
                    </button>
                )}
            </div>

            {/* Desktop searchbar  */}
            <PcSearchBar inputText={searchText} handleInputChange={handleSearchtext} handleText={setSearchText} />
        </div>
    )
}