import { lazy } from "react";

const Banner = lazy(() => import("./../components/Banner"));
const AppointmentBook = lazy(
  () => import("./../components/AppointmentBook")
);
const ServicesCTA = lazy(() => import("./../components/ServiceCTA"));

const WhyChooseUsSection = lazy(
  () => import("./../components/WhyChooseUs")
);

const StatsAndServicesSection = lazy(
  () => import("./../components/StatsAndServices")
);
const CallToAction = lazy(
  () => import("./../components/CallToAction")
);
const BookingProcess = lazy(
  () => import("./../components/BookingProcess")
);

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
    </>
  );
}
