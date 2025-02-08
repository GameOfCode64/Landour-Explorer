import BlogPage from "@/components/BlogPage";
import HeroPage from "@/components/HeroPage";
import LandingTreks from "@/components/LandingTreks";
import NewsLatter from "@/components/NewsLatter";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroPage />
      <LandingTreks />
      <BlogPage />
      <Review />
      <NewsLatter />
    </main>
  );
}
