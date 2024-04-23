import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WhyBanner from "./WhyBanner";
import WhyJourney from "./WhyJourney";
import BrandStoryVideo from "./BrandStoryVideo";
import CompanyCulture from "./CultureFeature";
import Strategy from "./Strategy";
import Partnership from "./Partnership";
import CertificateCarousel from "./CertificateCarousel";

const WhyPage = () => {
  return (
    <div className="bg-light-grey">
      <Header />
      <main>
        <WhyBanner />
        <BrandStoryVideo />
        <CompanyCulture />
        <WhyJourney />
        <CertificateCarousel />
        <Strategy />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
};

export default WhyPage;
