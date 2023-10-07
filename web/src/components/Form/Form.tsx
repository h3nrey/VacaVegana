"use client"

import { Children, createElement } from "react"
import { useForm } from "react-hook-form"

interface Props {
    children: JSX.Element[]
    onSubmit: (data: any) => void
}

export default function Form({ children, onSubmit }: Props) {
    const methods = useForm()
    const { handleSubmit } = methods


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8">
                {Children.map(children, child => {
                    return child.props.name
                        ? createElement(child.type, {
                            ...{
                                ...child.props,
                                register: methods.register,
                                key: child.props.name
                            }
                        })
                        : child
                })}
            </div>
        </form>
    )
}