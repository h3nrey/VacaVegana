export default function NutStats({ stats }: { stats: string[] }) {
    const statsTypes = [
        {
            type: "Calorias",
            unit: "kcal"
        },
        {
            type: "Gordura",
            unit: "g"
        },
        {
            type: "Carbohidratos",
            unit: "g"
        },
        {
            type: "Proteinas",
            unit: "g"
        },
    ]

    return (
        <div className="bg-primary-base gap-8 flex flex-col w-fit p-4 rounded-sm text-white">
            <p className="text-xl font-medium">Dados nutricionais</p>

            <div className="flex gap-1">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-primary-light py-1 px-2 pr-5 flex flex-col rounded-sm">
                        <span>{statsTypes[index].type}</span>
                        <span>{stat} {statsTypes[index].unit}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}