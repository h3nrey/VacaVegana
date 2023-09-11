import Image from "next/image";
import logoBranca from '../../public/logoBranca.svg'
import logoVerde from '../../public/logoVerde.svg'
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ILogo {
    height: number[];
    color: "verde" | "branca"
}
export default function Logo({ height, color }: ILogo) {
    // const screenWidth = useRef(window.innerWidth);
    return (
        <>
            <Link href="/" className="">
                <Image
                    priority
                    src={color == "verde" ? logoVerde : logoBranca}
                    alt="Vaca Verde"
                    // height={screenWidth.current < 800 ? height[0] : height[1]}
                    height={1000 < 800 ? height[0] : height[1]}
                />
            </Link>
        </>
    )
}