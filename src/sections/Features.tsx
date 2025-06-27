import Tag from "@/components/Tags";
import { div } from "framer-motion/client";

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
    return <section>
         <div className="container">
            <Tag className="flex justify-center w-fit items-center">features</Tag>
            <h2>Where power meets <span>simplicity</span> </h2>
             <div>
                {/* first feature */}
                <div>
                    <div></div>
                    <div>
                    <h3>Real Time Collaboration</h3>
                    <p>Work Together seamlessly with conflict-free team editing  </p>
                    </div>
                </div>
                 {/* second feature */}
                <div>
                    <div></div>
                    <div>
                    <h3>Interactive Protyping</h3>
                    <p>eEngage your clients with a prototype that reacts to user actions </p>
                    </div>
                </div>
                {/* third feature */}
                <div>
                    <div></div>
                    <div>
                    <h3>Keyword Quick Actions</h3>
                    <p>Powerfull commands to help you create designs more quickly </p>
                    </div>
                </div>
             </div>
             <div>
                {features.map(feature)=>(
                    <div key={feature}>
                         <span></span>
                         <span>{feature}</span>
                    </div>
                    
                ))}
             </div>
        </div>
    </section>;
}
