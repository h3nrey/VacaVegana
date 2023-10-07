export default function ErrorToast({ message }: { message: string }) {
    return (
        <div className="animate-toastPop origin-left bg-red-500 text-[1.125rem] text-white py-4 pl-6 rounded-sm">
            {message}
        </div>
    )
}