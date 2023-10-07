"use client"

interface Props {
    register?: any
    label: string
    type?: string
    name: string,
    placeholder: string,
}

export default function Input({ register, label, type, name, placeholder }: Props) {
    return (
        <div>
            <label
                htmlFor=""
                className="text-white text-[1.125rem]"
            >
                {label}
            </label>
            <input
                {...register(name)}
                type={type ? type : "text"}
                className="bg-white p-2 pl-4 w-full text-black rounded-sm"
                placeholder={placeholder}
            />
        </div>
    )
}