import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
export default function Hero() {
    return (
        <section className="py-24 overflow-x-hidden  overflow-y-hidden">
            <div className="container relative  ">
                <div>
                    <Image
                        src={designExample1Image}
                        alt="designExample"
                        className="absolute -left-32 top-15 hidden lg:block"
                    ></Image>
                </div>

                <div className="lg:visible">
                    <Image
                        src={designExample2Image}
                        alt="exampleImage"
                        className="absolute -right-64 -top-16 hidden lg:block"
                    ></Image>
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Tammy" color="blue" />
                </div>
                <div className="absolute right-80 -top-5 hidden lg:block">
                    <Pointer name="Bryan " color="red"></Pointer>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-blue-700 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="sm:text-5xl md:text-7xl font-medium text-center mt-6 mx-auto  ">
                    Impactful designs,<br></br> created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    quibusdam similique cum exercitationem, ratione nisi animi
                    adipisci tempora itaque, eos minus? Ratione earum
                    consequatur sed!
                </p>
                <div className="flex justify-center  ">
                    <form className=" border border-gray-600    justify-between  p-1 mt-8  rounded-full">
                        <input
                            className="bg-transparent border-none rounded-full outline-none px-4 py-2 md:flex-1 "
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        <Button
                            type="submit"
                            className="whitespace-nowrap"
                            variant="primary"
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
