import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { Principles } from "@/components/home/Principles";
import { PlatformsTeaser } from "@/components/home/PlatformsTeaser";
import { WhyUs } from "@/components/home/WhyUs";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <IndustriesStrip />
      <WhoWeAre />
      <Principles />
      <PlatformsTeaser />
      <WhyUs />
      <InsightsTeaser />
      <Testimonials />
      <FinalCta />
    </>
  );
}
