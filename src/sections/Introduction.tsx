const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="w-full flex justify-center items-center mb-13">
                <div className=" flex items-center justify-center border border-lime-400 text-lime-400 w-fit px-4 py-2 rounded-full font-bold ">
                    INTRODUCTION LAYER
                </div>
            </div>
            <div className="text-5xl px-10">
                <span> Your creativity process deserves better</span>
                <br />
                <span>{text}</span>
                <br />
                <span>That&apos;s why we built layers</span>
            </div>
        </div>
    );
}
