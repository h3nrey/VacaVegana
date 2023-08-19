import Nav from "./Header/Nav";
import Logo from "./Logo";

export default function Header() {
    return (
        <div className="bg-primary-base flex px-4 py-2 font-sans">
            {/* Left  */}
            <div className="flex items-center flex-row-reverse">
                <Logo color="branca" height={48} />
                <Nav />
            </div>

            <div></div>

        </div>
    )
}