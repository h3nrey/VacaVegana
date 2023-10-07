"use client"

import { Children, createElement } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface Props {
    children: JSX.Element[]
    onSubmit: (data: any) => void
}

export default function Form({ children, onSubmit }: Props) {
    const methods = useForm()
    const { handleSubmit, formState, control } = methods
    const { errors } = formState

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-8">
                    {Children.map(children, child => {
                        return child.props.name
                            ? (
                                <>
                                    {
                                        createElement(child.type, {
                                            ...{
                                                ...child.props,
                                                register: methods.register,
                                                key: child.props.name
                                            }
                                        })
                                    }
                                    <span>{errors.root?.message}</span>
                                </>
                            ) : child
                    })}
                </div>
            </form>
            <DevTool control={control} />
        </>
    )
}