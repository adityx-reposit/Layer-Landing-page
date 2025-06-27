import Tag from "@/components/Tags";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 lg:py-40">
            <div className="w-full flex justify-center items-center mb-13">
                <div>
                    <Tag>Introduction layer</Tag>
                </div>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl px-10">
                <span> Your creativity process deserves better</span>{" "}
                <br />
                <span className="text-white/15 ">{text}</span>
                <br />
                <span className="text-lime-400 block">That&apos;s why we built layers</span>
            </div>
        </div>
    );
}
