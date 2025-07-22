import { ImpactStats } from "../components/ImpactStats";
import Hero from "../assets/adars_jain.jpg";
import HeroBanner from "../components/HeroBanner";

export const HeroSection = () => (
  <>
    <HeroBanner
      image={Hero}
      title="Protect. Educate. Empower."
      subtitle="So children can rise above adversity and thrive."
    />

    <ImpactStats />
  </>
);
