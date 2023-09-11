import SectionHeader from "./SectionHeader"

export default function IngredientsContainer({ ingredients }: { ingredients: string[] }) {
    return (
        <section
            className="flex flex-col"
        >
            <SectionHeader title="Ingredientes" />
            <ul className="pl-3 mt-1">
                {ingredients.map((ing, index) => (
                    <li
                        key={index}
                        className="text-primary-base"
                    >
                        {ing}
                    </li>
                ))}
            </ul>
        </section>
    )
}