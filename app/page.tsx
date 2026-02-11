import Image from "next/image";
import HomeSection from "./components/homesection";
import WhyTrustSection from "./components/whytrustsection";
import Courses from "./components/coursessection"
import AppDownloadSection from "./components/appdownloadsection";
import FAQSection from "./components/faqsection";
export default function Home() {
  return (
    <div className="">
      <HomeSection/>
      <WhyTrustSection/>
      <Courses/>
      <AppDownloadSection/>
      <FAQSection/>
    </div>
  );
}
