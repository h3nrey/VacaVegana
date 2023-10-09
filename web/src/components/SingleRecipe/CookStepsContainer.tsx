import { CookStep } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function CookStepsContainer({ steps }: { steps: CookStep[] }) {
    return (
        <div>
            <SectionHeader title="Modo de Preparo" />

            <div className="mt-4 flex flex-col gap-4">
                {steps.map((step, index) => (
                    <div
                        className="bg-primary-base flex flex-col max-w-[40rem] gap-3 rounded-sm p-4 pb-8 w-fit"
                        key={index}
                    >
                        <div className="flex items-center gap-2 text-white">
                            <span
                                className="bg-primary-light w-8 h-8 flex items-center justify-center rounded-full">
                                {index + 1}
                            </span>
                            <span className="">
                                {step.title}
                            </span>
                        </div>
                        <p className="text-white">
                            {step.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    )
}