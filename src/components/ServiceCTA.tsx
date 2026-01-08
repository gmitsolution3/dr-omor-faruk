import { Check } from "lucide-react";
import { Button } from "./ui/button";
import type { TButton } from "@/type";
import { servicesData } from "@/data/serviceCTA.data";

export default function ServicesCTA() {
  return (
    <section
      id={servicesData.id}
      className={`py-12 md:py-16 lg:py-20 ${servicesData.bgColor}`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Images Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {servicesData.images.slice(0, 2).map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 lg:h-80"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Bottom full-width image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 lg:h-72">
                <img
                  src={servicesData.images[2].src}
                  alt={servicesData.images[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-[#423D96] font-medium text-sm md:text-base">
              {servicesData.subtitle}
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight whitespace-pre-line">
              {servicesData.heading}
            </h2>

            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              {servicesData.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Services List */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  বিশেষত্ব
                </h3>

                <div className="space-y-2 md:space-y-3">
                  {servicesData.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <Check
                        className="text-[#4285f4] flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm md:text-base">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Image */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                <img
                  src={servicesData.doctor.image}
                  alt={servicesData.doctor.alt}
                  className="w-40 lg:w-48 h-auto object-cover"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Button
                variant={servicesData.button.variant as TButton}
                className={servicesData.button.className}
              >
                {servicesData.button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}