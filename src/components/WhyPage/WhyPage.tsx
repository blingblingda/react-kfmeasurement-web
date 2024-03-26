import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WhyBanner from "./WhyBanner";
import WhyJourney from "./WhyJourney";
import BrandStoryVideo from "./BrandStoryVideo";
import CompanyCulture from "./CompanyCulture";
import Strategy from "./Strategy";

const WhyPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <WhyBanner />
        <BrandStoryVideo />
        <CompanyCulture />
        <Strategy />
        <WhyJourney />
      </main>
      <Footer />
    </>
  );
};

export default WhyPage;
