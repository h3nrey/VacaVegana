export default function SectionHeader({ title }: { title: string }) {
    return (
        <h3
            className="text-[1.5rem] font-semibold text-primary-base"
        >
            {title}
        </h3>
    )
}