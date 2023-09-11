export default function SectionHeader({ title }: { title: string }) {
    return (
        <h3
            className="text-xl font-semibold text-primary-base"
        >
            {title}
        </h3>
    )
}