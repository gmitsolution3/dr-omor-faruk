import { Phone } from "lucide-react";
import { bookingProcessData } from "@/data/bookingProcess.data";

export default function BookingProcess() {
  return (
    <section
      id={bookingProcessData.id}
      className={`py-12 md:py-16 lg:py-20 ${bookingProcessData.bgColor}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Process Steps */}
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="space-y-3">
              <p
                className="font-medium text-sm md:text-base"
                style={{
                  color:
                    bookingProcessData.headingSection.subtitleColor,
                }}
              >
                {bookingProcessData.headingSection.subtitle}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                {bookingProcessData.headingSection.title}
              </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {bookingProcessData.steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="space-y-3 sm:space-y-4">
                    {/* Icon with number */}
                    <div className="relative inline-block">
                      <div className="bg-primary rounded-t-2xl p-4 sm:p-5 md:p-6 inline-block">
                        <Icon size={32} className="text-white" />
                      </div>
                      <div className="absolute top-4 -right-8 bg-[#1a2332] text-white rounded-t-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="md:text-xl text-lg font-light text-gray-900 leading-snug max-w-52">
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Images and Contact Card */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {bookingProcessData.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 0
                      ? "rounded-tl-2xl overflow-hidden aspect-square"
                      : "rounded-tr-2xl overflow-hidden aspect-square"
                  }
                >
                  <img
                    src={imgSrc}
                    alt="Booking step"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div
              className={`rounded-b-2xl p-6 sm:p-8 text-white bg-[${bookingProcessData.contactCard.bgColor}]`}
            >
              <div className="flex items-cennter justify-between space-y-4 sm:space-y-6">
                {/* Working Hours */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {
                      bookingProcessData.contactCard.workingHours
                        .label
                    }
                  </h3>
                  <div
                    className="flex items-center gap-2 sm:gap-3"
                    style={{
                      color:
                        bookingProcessData.contactCard.workingHours
                          .textColor,
                    }}
                  >
                    <bookingProcessData.contactCard.workingHours.icon
                      size={
                        bookingProcessData.contactCard.workingHours
                          .iconSize
                      }
                      className="sm:w-5 sm:h-5"
                    />
                    <p className="text-base sm:text-lg">
                      {
                        bookingProcessData.contactCard.workingHours
                          .time
                      }
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600"></div>

                {/* Contact Button */}
                <div className="flex flex-col-reverse items-center justify-center gap-2">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">
                      {bookingProcessData.contactCard.phone.label}
                    </p>
                    <p className="text-lg font-semibold break-all">
                      {bookingProcessData.contactCard.phone.number}
                    </p>
                  </div>
                  <button
                    className={`transition-colors rounded-t-2xl p-3 sm:p-4 ${bookingProcessData.contactCard.phone.buttonBg}`}
                  >
                    <Phone
                      size={
                        bookingProcessData.contactCard.phone.iconSize
                      }
                      className="sm:w-7 sm:h-7"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
