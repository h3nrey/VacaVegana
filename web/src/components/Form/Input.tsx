"use client"

import { FieldValues, UseFormRegister } from "react-hook-form"

interface Props {
    register?: UseFormRegister<any>
    label: string
    type?: string
    name: string,
    required?: boolean
    placeholder: string,
}

export default function Input({ register, label, required, type, name, placeholder }: Props) {
    return (
        
    )
}