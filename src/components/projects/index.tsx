import CardProjects from "./card";

export default function Projects() {
    return (
        <div className="px-16 mt-20 mb-60">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                <CardProjects/>
            </div>
        </div>
    )
}