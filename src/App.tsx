import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  CallToAction,
  Services,
  Pricing,
  Subscribe,
  Client,
  Footer,
  BackToTop,
  Gallery,
  BlogSection,
  Faq,
  ClientFeedback,
  InstagramEmbed,
  WhySection,
  WhatsAppFAB,
  FindUsSection,
  ScrollToTop,
} from "./components";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PricingSewaPage from "./pages/PricingSewaPage";
import PricingSelfRunPage from "./pages/PricingSelfRunPage";
import PricingSharingProfitPage from "./pages/PricingSharingProfitPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FindUsSection />
      <Client />
      <Pricing />
      <CallToAction />
      <Services />
      <WhySection />
      <ClientFeedback />
      <Subscribe />
      <Gallery />
      <InstagramEmbed />
      <BlogSection />
      <Faq />
      <Footer />
      <WhatsAppFAB />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing/sewa" element={<PricingSewaPage />} />
        <Route path="/pricing/self-run" element={<PricingSelfRunPage />} />
        <Route
          path="/pricing/sharing-profit"
          element={<PricingSharingProfitPage />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
