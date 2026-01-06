import Banner from "./../components/Banner";
import AppointmentBook from "./../components/AppointmentBook";
import ServicesCTA from "./../components/ServiceCTA";
import WhyChooseUsSection from "./../components/WhyChooseUs";
import StatsAndServicesSection from "./../components/StatsAndServices";
import CallToAction from "./../components/CallToAction";
import BookingProcess from "./../components/BookingProcess";
import BlogSection from "./../components/BlogSection";

export default function Home() {
  return (
    <>
      <Banner />
      <AppointmentBook />
      <ServicesCTA />
      <WhyChooseUsSection />
      <StatsAndServicesSection />
      <CallToAction />
      <BookingProcess />
      <BlogSection />
    </>
  );
}
