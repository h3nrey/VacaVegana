"use client"
import ErrorToast from "@/components/Form/ErrorToast";
import InputError from "@/components/Form/InputError";
import { registerUser } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type signupType = {
    username: string,
    email: string,
    password: string,
    password2: string,
}

export default function Page() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("")
    const form = useForm<signupType>()
    const { handleSubmit, formState, register, watch } = form
    const { errors } = formState

    const onSubmit = async ({ username, email, password }: signupType) => {
        const userApi = await registerUser({
            username,
            email,
            password
        })

        if (userApi.wasSuccessful) {
            router.replace("/")
        }
        setErrorMessage(userApi.message)
    }


    return (
        <div className="flex pt-10 items-center justify-center">

            <div className="flex flex-col gap-2">
                {errorMessage && (
                    <ErrorToast message={errorMessage} />
                )}

                <div className="flex flex-col bg-primary-base text-white p-8 w-[29rem] rounded-md">
                    <div
                        className="text-[2rem] text-white font-semibold text-center mb-6">
                        Cadastro
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-8"
                    >
                        {/* Fieldset  */}
                        <div className="flex flex-col gap-2">

                            {/* Username field  */}
                            <div className="flex flex-col gap-0">
                                <label className="text-white text-[1.125rem]">
                                    Nome de usuário
                                </label>

                                <input
                                    {...register("username",
                                        {
                                            required: "Necessário",
                                            minLength: {
                                                message: "Precisa ter no mínimo 4 characteres",
                                                value: 4
                                            }
                                        })}
                                    className="bg-white p-2 pl-4 w-full text-primary-base rounded-sm"
                                    placeholder="Ex: h3nrey"
                                />

                                {errors.username?.message && (
                                    <InputError message={errors.username.message} />
                                )}
                            </div>

                            {/* Email field  */}
                            <div className="flex flex-col gap-0">
                                <label className="text-white text-[1.125rem]">
                                    Email
                                </label>

                                <input
                                    {...register("email",
                                        {
                                            required: "Necessário",
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message: "Tem que está nesse padrão example@somemail.com"
                                            }
                                        })}
                                    className="bg-white p-2 pl-4 w-full text-primary-base rounded-sm"
                                    placeholder="Ex: h3nrey"
                                />

                                {errors.email?.message && (
                                    <InputError message={errors.email.message} />
                                )}
                            </div>

                            {/* Password field  */}
                            <div className="flex flex-col gap-0">
                                <label className="text-white text-[1.125rem]">
                                    Senha
                                </label>

                                <input
                                    {...register("password",
                                        {
                                            required: "Necessário",
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                message: "Requer 8 characteres no minimo, dentre desses precisa de um em letra maiuscula, um em letra minuscula, um número e um charactere especial"
                                            }
                                        })}
                                    className="bg-white p-2 pl-4 w-full text-primary-base rounded-sm"
                                    placeholder="Ex: Vacavegana_123"
                                />

                                {errors.password?.message && (
                                    <InputError message={errors.password.message} />
                                )}
                            </div>

                            {/* Password field  */}
                            <div className="flex flex-col gap-0">
                                <label className="text-white text-[1.125rem]">
                                    Confirmar senha
                                </label>

                                <input
                                    {...register("password2",
                                        {
                                            required: "Necessário",
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                message: "Requer 8 characteres no minimo, dentre desses precisa de um em letra maiuscula, um em letra minuscula, um número e um charactere especial"
                                            },
                                            validate: (value) => value === watch("password") || "Passwords do not match"
                                        })}
                                    // type="password"
                                    className="bg-white p-2 pl-4 w-full text-primary-base rounded-sm"
                                    placeholder="Ex: Vacavegana_123"
                                />

                                {errors.password2?.message && (
                                    <InputError message={errors.password2.message} />
                                )}
                            </div>
                        </div>

                        <button
                            className="bg-white w-fit font-medium text-[1.25rem] hover:bg-primary-light transition-all hover:text-white text-primary-base p-2 px-4 rounded-sm"
                            type="submit">
                            Logar
                        </button>
                    </form>

                    <div className="flex gap-2 mt-10">
                        <span className="text-[1.25rem]">Já tem conta?</span>
                        <Link href="/login" className="font-medium text-[1.25rem] hover:underline transition-all">
                            Logue-se
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}