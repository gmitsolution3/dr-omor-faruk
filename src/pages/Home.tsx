import Banner from "./../components/Banner";
import AppointmentBook from "./../components/AppointmentBook";
import ServicesCTA from "./../components/ServiceCTA";
import WhyChooseUsSection from "./../components/WhyChooseUs";
import StatsAndServicesSection from "./../components/StatsAndServices";

export default function Home() {
  return (
    <div>
      <Banner />
      <AppointmentBook />
      <ServicesCTA />
      <WhyChooseUsSection />
      <StatsAndServicesSection />
    </div>
  );
}
