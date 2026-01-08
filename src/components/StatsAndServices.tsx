import { Button } from "./ui/button";
import { statsAndServicesData } from "@/data/statAndServiceData";

export default function StatsAndServicesSection() {
  const { id, sectionClass, stats, servicesSection } =
    statsAndServicesData;
  const { subtitle, heading, cta, servicesGrid } = servicesSection;

  return (
    <section id={id} className={sectionClass}>
      <div className="container mx-auto px-4 lg:px-0">
        {/* Stats Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 md:space-y-4"
              >
                <div className="flex justify-center">
                  <div className="scale-75 md:scale-90 lg:scale-100">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    {stat.number}
                    <span className="text-primary">+</span>
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-6 md:space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div>
              <p className="text-[#4285f4] font-medium mb-2 text-sm md:text-base">
                {subtitle}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {heading}
              </h2>
            </div>

            <Button
              variant="primary"
              className="bg-primary hover:bg-[#10172E]"
            >
              {cta.text}
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {servicesGrid.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-48 md:h-56 lg:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
