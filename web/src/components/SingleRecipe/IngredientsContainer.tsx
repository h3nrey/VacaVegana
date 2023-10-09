import SectionHeader from "./SectionHeader"

export default function IngredientsContainer({ ingredients }: { ingredients: string[] }) {
    return (
        <section
            className="flex flex-col"
        >
            <SectionHeader title="Ingredientes" />
            <ul className="pl-3 mt-1 flex flex-col gap-2">
                {ingredients.map((ing, index) => (
                    <li
                        key={index}
                        className="text-primary-base list-disc text-[1.125rem]"
                    >
                        {ing}
                    </li>
                ))}
            </ul>
        </section>
    )
}