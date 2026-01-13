import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { servicesCTAData } from "@/data/serviceCTAData";
import { Link } from "react-router";

export default function ServicesCTA() {
  const {
    id,
    sectionClass,
    images,
    subtitle,
    heading,
    description,
    specialties,
    doctorImage,
    cta,
  } = servicesCTAData;

  return (
    <section id={id} className={sectionClass}>
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Images */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {images.grid.map((img, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-lg ${img.className}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-primary font-medium text-sm md:text-base">
              {subtitle}
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight">
              {heading.line1}
              <br className="hidden md:block" />
              {heading.line2}
            </h2>

            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              {description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Specialties */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  বিশেষত্ব
                </h3>

                <div className="space-y-2 md:space-y-3">
                  {specialties.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <Check
                        className="text-[#4285f4] flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Image */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                <img
                  src={doctorImage.src}
                  alt={doctorImage.alt}
                  className={`${doctorImage.className} h-auto object-cover`}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 md:pt-4">
              <Button
                variant="primary"
                className="bg-primary hover:hover:bg-[#10172E]"
                asChild
              >
                <Link to="/doctor-profile">{cta.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
