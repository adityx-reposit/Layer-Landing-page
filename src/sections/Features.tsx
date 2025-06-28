import FeatureCard from "@/components/featureCard";
import Tag from "@/components/Tags";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-florence-shaw.jpg'
import avatar3 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg'
import Image from "next/image";


const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
         <div className="container">
            <div className="flex justify-center items-center">
            <Tag>features</Tag>
            </div>
            <h2 className="text-center text-6xl font-medium mt-6 ">Where power meets <span className="text-lime-400">simplicity</span> </h2>
             <div>
                {/* first feature */}
                <div className="mt-12 grid grid-cols-1 gap-8">
                   <div>
                   
                   <FeatureCard title="Real time Collaboration" description="Work together seemlessly with conflict-free team editing " children={
                    <div className="flex justify-center items-center py-14 gap-4  ">
                        <div>
                        <Image alt="image" src={avatar1}/>
                        </div>
                        <div>
                        <Image alt="image" src={avatar2}/>
                        </div>
                        <div>
                        <Image alt="image" src={avatar3}/>
                        </div>
                   </div>}/>
                     
                    </div> 
                   
               <div>
                
                </div>
                </div>
                 {/* second feature */}
                <div className="mt-12 grid grid-cols-1 gap-8">
               
                    <FeatureCard title="Interactive Protyping" description="Engage your clients with a prototype that reacts to user actions"/>
                 
                </div>
                {/* third feature */}
                <div className="mt-12 grid grid-cols-1 gap-8">

                    <FeatureCard title="Keyword Quick Actions" description="Powerfull commands to help you create designs more quickly  "/>

                </div>
             </div>
             <div>
              {features.map((feature)=>(
                <div key={feature}>
                    <span></span>
                    <span>{feature}</span>
                </div>
            ))}
             </div>
        </div>
    </section>;
}
