import Image from "next/image";
import HomeSection from "./components/homesection";
import Courses from "./components/coursessection"
import AppDownloadSection from "./components/appdownloadsection";
import FAQSection from "./components/faqsection";
import StatsSection from "./components/statesection";
export default function Home() {
  return (
    <div className="">

      
      <HomeSection/>
      <StatsSection/>
      <Courses/>
      <AppDownloadSection/>
      <FAQSection/>
    </div>
  );
}
