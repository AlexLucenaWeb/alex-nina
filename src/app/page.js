import HeroImage from "@/components/HeroImage";
import WeddingInfo from "@/components/WeddingInfo";
import Palacete from "@/components/Palacete";
import WeddingPlan from "@/components/WeddingPlan";

export default function Home() {
    return (
        <div className="w-full">
            <HeroImage />
            <WeddingInfo />
            <Palacete />
            <WeddingPlan />
        </div>
    );
}
