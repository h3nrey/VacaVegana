import Image from "next/image";
import logoBranca from '../../../public/logoBranca.svg'
import logoVerde from '../../../public/logoVerde.svg'
import Link from "next/link";

interface ILogo {
    height: number;
    color: "verde" | "branca"
}
export default function Logo({ height, color }: ILogo) {
    return (
        <>
            <Link href="/">
                <Image
                    src={color == "verde" ? logoVerde : logoBranca}
                    height={48}
                    alt="Vaca Verde"
                />
            </Link>
        </>
    )
}