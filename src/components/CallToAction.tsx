import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="bg-[#1a2332] py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left side - Text */}
          <div className="text-white text-center lg:text-left flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              তুক ও যৌনস্বাস্থ্যের বিভিন্ন সমসা সমাধানের জন্য যোগায়োগ
              করুন
            </h2>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="relative flex items-stretch">
              {/* Phone Button */}
              <button className="bg-[#6C234C] text-white rounded-tl-2xl py-3 md:py-4 px-4 md:px-6 lg:px-8 hover:bg-[#4a1835] transition-colors flex items-center justify-center gap-2 md:gap-3 font-medium text-sm md:text-base flex-1 lg:flex-initial">
                <Phone size={18} className="md:w-5 md:h-5" />
                <span className="whitespace-nowrap">
                  +8801974-896998
                </span>
              </button>

              {/* "Or" Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="bg-[#10172E] text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xs md:text-sm font-medium shadow-lg border-2 border-[#1a2332]">
                  অথবা
                </span>
              </div>

              {/* Appointment Button */}
              <button className="bg-[#F8F329] text-gray-900 rounded-tr-2xl py-3 md:py-4 px-4 md:px-6 lg:px-8 hover:bg-[#e6e024] transition-colors flex items-center justify-center gap-2 font-bold text-sm md:text-base flex-1 lg:flex-initial">
                <a
                  href="https://forms.gle/hRaBxfPtMFmPVXuW8"
                  target="_blank"
                >
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
