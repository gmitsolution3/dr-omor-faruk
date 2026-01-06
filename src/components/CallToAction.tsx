import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-[#1a2332] py-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Text */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              তুক ও যৌনস্বাস্থ্যের বিভিন্ন সমসা সমাধানের জন্য যোগায়োগ
              করুন
            </h2>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="flex flex-shrink-0 relative">
            {/* Phone Button */}
            <button className="bg-[#6C234C] rounded-tl-2xl py-3 px-6 hover:bg-[#6B3F6C] transition-colors flex items-center gap-3 font-medium h-15 text-white">
              <Phone size={20} />
              <span>+8801974-896998</span>
            </button>

            <span className="text-white text-white bg-[#10172E] absolute top-[10%] left-[50%] -translate-x-[90%] z-9 p-2 rounded-full text-[10px] size-10 text-center leading-[25px]">
              অথবা
            </span>

            {/* WhatsApp Button */}
            <button className="bg-[#F8F329] to-yellow-400 text-gray-900 rounded-tr-2xl py-3 px-6 hover:opacity-90 transition-opacity flex items-center gap-3 font-bold">
              <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
