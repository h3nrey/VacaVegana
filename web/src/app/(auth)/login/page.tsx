"use client"
import ErrorToast from "@/components/Form/ErrorToast";
import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import InputError from "@/components/Form/InputError";
import { loginUser } from "@/lib/api";
import { DevTool } from "@hookform/devtools";
import { WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type loginType = {
    username: string,
    password: string,
}

export default function Page() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("")
    const form = useForm<loginType>()
    const { handleSubmit, formState, control, register } = form
    const { errors } = formState

    const onSubmit = async (data: loginType) => {
        const userApi = await loginUser({ username: data.username, password: data.password })
        console.log(userApi)

        if (userApi.wasSuccessful) {
            router.push("/")
        }
        setErrorMessage(userApi.message)
    }


    return (
        <div className="flex pt-32 items-center justify-center">

            <div className="flex flex-col gap-2">
                {errorMessage && (
                    <ErrorToast message={errorMessage} />
                )}

                <div className="flex flex-col bg-primary-base text-white p-8 w-[29rem] rounded-md">
                    <div
                        className="text-[2rem] text-white font-semibold text-center mb-6">
                        Login
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
                        </div>

                        <button
                            className="bg-white w-fit font-medium text-[1.25rem] hover:bg-primary-light transition-all hover:text-white text-primary-base p-2 px-4 rounded-sm"
                            type="submit">
                            Logar
                        </button>
                    </form>
                    {/* <DevTool control={control} /> */}

                    <div className="flex gap-2 mt-10">
                        <span className="text-[1.25rem]">novo usuário?</span>
                        <Link href="/signup" className="font-medium text-[1.25rem] hover:underline transition-all">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}