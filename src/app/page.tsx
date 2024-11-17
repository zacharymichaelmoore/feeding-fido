// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./_sections/hero";
import VideoIntro from "./_sections/video-intro";
import Feature from "./_sections/feature";
import MobileConvenience from "./_sections/mobile-convenience";
import Testimonials from "./_sections/testimonials";
import Faqs from "./_sections/faqs";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
