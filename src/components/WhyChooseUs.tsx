import { Button } from "./ui/button";
import { whyChooseUsData } from "@/data/whyChooseUs.data";
import type { TButton } from "@/type";

export default function WhyChooseUsSection() {
  return (
    <section
      id={whyChooseUsData.id}
      className={`py-12 md:py-16 lg:py-20`}
      style={{
        backgroundColor: whyChooseUsData.bgColor,
      }}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <p
              className="font-medium text-base md:text-lg"
              style={{ color: whyChooseUsData.subtitleColor }}
            >
              {whyChooseUsData.subtitle}
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line">
              {whyChooseUsData.heading}
            </h2>

            <div className="pt-2 md:pt-4">
              <Button
                asChild
                variant={whyChooseUsData.button.variant as TButton}
                className={whyChooseUsData.button.className}
              >
                <a href={whyChooseUsData.button.link} target="_blank">
                  {whyChooseUsData.button.text}
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {whyChooseUsData.features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className={`
                    ${feature.bgColor}
                    ${feature.rounded}
                    ${
                      feature.border ? "border-2 border-gray-700" : ""
                    }
                    p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 min-h-[160px] md:min-h-[200px] hover:scale-105 transition-transform
                  `}
                >
                  <div className="flex items-center justify-center">
                    <div className="scale-75 md:scale-100">
                      <IconComponent
                        size={48}
                        className={feature.iconColor}
                      />
                    </div>
                  </div>
                  <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold leading-snug">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
