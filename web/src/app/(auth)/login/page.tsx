"use client"
import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import { loginUser } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

type loginType = {
    email: string,
    password: string,
}

export default function Page() {
    const router = useRouter();
    const handleFormSubmit = async (data: any) => {
        const userApi = await loginUser({ username: data.username, password: data.password })
        console.log(userApi)
        router.push("/")
    }


    return (
        <div className="flex pt-32 items-center justify-center">
            <div className="flex flex-col bg-primary-base text-white p-8 w-[29rem] rounded-md">
                <div
                    className="text-[2rem] text-white font-semibold text-center mb-6">
                    Login
                </div>
                <Form onSubmit={handleFormSubmit}>
                    <Input
                        label="Nome de usuário"
                        name="username"
                        placeholder="ChefGreen"
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="password"
                    />

                    <button
                        className="bg-white w-fit font-medium text-[1.25rem] hover:bg-primary-light transition-all hover:text-white text-primary-base p-2 px-4 rounded-sm"
                        type="submit">
                        Logar
                    </button>
                </Form>

                <div className="flex gap-2 mt-10">
                    <span className="text-[1.25rem]">novo usuário?</span>
                    <Link href="/signup" className="font-medium text-[1.25rem] hover:underline transition-all">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    )
}