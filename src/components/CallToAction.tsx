import { Phone } from "lucide-react";
import { callToActionData } from "@/data/cta.data";

export default function CallToAction() {
  return (
    <section
      id={callToActionData.id}
      className={`py-12 md:py-16 lg:py-20 bg-[${callToActionData.bgColor}]`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between ${callToActionData.gap}`}
        >
          {/* Left side - Text */}
          <div className="text-white text-center lg:text-left flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              {callToActionData.heading}
            </h2>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="relative flex items-stretch">
              {/* Phone Button */}
              <button
                className={`flex items-center justify-center gap-2 md:gap-3 flex-1 lg:flex-initial font-medium text-sm md:text-base ${callToActionData.phoneButton.bgColor} ${callToActionData.phoneButton.textColor} ${callToActionData.phoneButton.rounded} py-3 md:py-4 px-4 md:px-6 lg:px-8 hover:${callToActionData.phoneButton.hoverBg} transition-colors`}
              >
                <Phone
                  size={callToActionData.phoneButton.iconSize}
                  className="md:w-5 md:h-5"
                />
                <span className="whitespace-nowrap">
                  {callToActionData.phoneButton.number}
                </span>
              </button>

              {/* "Or" Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span
                  className={`flex items-center justify-center text-xs md:text-sm font-medium shadow-lg border-2 ${callToActionData.orBadge.textColor} border-[${callToActionData.orBadge.borderColor}] rounded-full w-14 h-14 md:w-${callToActionData.orBadge.size.md} md:h-${callToActionData.orBadge.size.md}`}
                  style={{
                    backgroundColor: callToActionData.orBadge.bgColor,
                  }}
                >
                  {callToActionData.orBadge.text}
                </span>
              </div>

              {/* Appointment Button */}
              <button
                className={`flex items-center justify-center gap-2 flex-1 lg:flex-initial font-bold text-sm md:text-base ${callToActionData.appointmentButton.textColor} ${callToActionData.appointmentButton.rounded} py-3 md:py-4 px-4 md:px-6 lg:px-8 hover:bg-[${callToActionData.appointmentButton.hoverBg}] transition-colors`}
                style={{
                  backgroundColor:
                    callToActionData.appointmentButton.bgColor,
                }}
              >
                <a
                  href={callToActionData.appointmentButton.link}
                  target="_blank"
                >
                  {callToActionData.appointmentButton.text}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
