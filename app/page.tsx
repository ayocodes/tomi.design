import Hero from "@/components/Hero";
import Casestudy from "@/components/Casestudy"
import ShowreelSection from "@/components/Showreel";
import SkillsSection from "@/components/Skillset";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <ShowreelSection /> */}
      <Casestudy />
      <SkillsSection />
      
      {/* Featured Works section will go here next */}
      
      {/* About Preview section will go here */}
      
      {/* Contact CTA section will go here */}
    </main>
  );
}