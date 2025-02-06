import Image from "next/image";
import HeroPage from "@/components/HeroPage";
import LandingTreks from "@/components/LandingTreks";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroPage />
      <LandingTreks />
    </main>
  );
}
