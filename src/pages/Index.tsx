import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCampaigns />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
