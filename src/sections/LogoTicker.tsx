import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className=" py-24 overflow-x-clip">
            <div className="container text-white/50 flex items-center justify-center text-2xl font-bold mb-4">
                <h3>Already Chosen By Market Brands</h3>
            </div>
            <div className="overflow-hidden mt-12 [mast-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex justify-center items-center gap-24">
                    {logos.map((Logo) => (
                        <Image
                            src={Logo.image}
                            alt={Logo.name}
                            key={Logo.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
