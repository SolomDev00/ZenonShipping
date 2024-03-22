import AboutSection from "./website/AboutSection";
import FeatureSection from "./website/FeatureSection";
import LandingSection from "./website/LandingSection";
import ServiceSection from "./website/ServiceSection";
import StatisticSection from "./website/StatisticSection";
import TrackSection from "./website/TrackSection";

const HomePage = () => {
  return (
    <div className="w-full max-sm:overflow-x-hidden">
      <LandingSection />
      <TrackSection />
      <AboutSection />
      <ServiceSection />
      <FeatureSection />
      <StatisticSection />
    </div>
  );
};

export default HomePage;
