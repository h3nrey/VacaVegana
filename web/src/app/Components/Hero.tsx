import Image from "next/image";
import logo from "../../../public/logoVerde.svg";
import cow from "../../../public/cow.png";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center pt-12 gap-4 w-[1200px]">
            <Image
                src={logo}
                alt="vaca verde"
                className="w-[14rem]"
                width={256} height={256}
            />
            <p
                className="text-primary-base text-2xl text-center px-10">
                Trazendo delicioasas refeições sem nenhum bixinho envolvido
            </p>
            <Image
                src={cow}
                alt="vaca verde"
                className="h-[7.25rem]"
                width={200} height={116}
            />
        </div>
    )
}