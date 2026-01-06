import { Check } from "lucide-react";
import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";
import TreatmentImage from "@/assets/treatment.jpg";
import DoctorImage from "@/assets/doctorImage.png";
import { Button } from "./ui/button";

export default function ServicesCTA() {
  const services = [
    "ফেস পিআরপি (Face PRP)",
    "হেয়ার পিআরপি (Hair PRP)",
    "কার্মিকেল পিলিং",
    "বোটক্স (Botox)",
    "ফিলার (Filler)",
    "ভিভা, আচিল দূষীকরণ",
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Images Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 lg:h-80">
                <img
                  src={FacialImage}
                  alt="Skin treatment consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 lg:h-80">
                <img
                  src={MakeupImage}
                  alt="Facial treatment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 lg:h-72">
                <img
                  src={TreatmentImage}
                  alt="Dermatology procedure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-6">
            {/* Subtitle */}
            <p className="text-[#423D96] font-light font-medium text-sm md:text-base">
              ডাঃ তৌহিদী ফারহানা ভিন্তি
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
              তুক, এলাজি, যৌন স্বাস্থ্য চিকিৎসায় প্রায়
              <br className="hidden md:block" />
              ৮+ বছরের অভিজ্ঞতা।
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                ডাঃ তৌহিদী ফারহানা ভিন্তি – একজন বিশেষজ্ঞ স্কিন,
                এলাজি, সেক্স ও অ্যাথেটিক মেডিসিন স্পেশালিস্ট এবং
                ডায়েটেশিয়ান। অনিদ্রিক চিকিৎসা ও প্রযুক্তি সহজে তার
                নিম্নমানের চিন লেখায় ও ফলমুখী সাস্থ্যবিধি পিছনে
                প্রশিক্ষণতত্ব।
              </p>

              <p>
                যুব তুক, নিবীর জীবন ও আন্তরিকতা সৌন্দর্যের জন্য অক্লা
                লক্ষ্য একজন অভিজ্ঞ স্পেশালিস্ট এর উপর।
              </p>
            </div>

            {/* Services List and Doctor Image */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Services List */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  বিশেষত্ব
                </h3>

                <div className="space-y-2 md:space-y-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
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

              {/* Doctor Image - Hidden on mobile, shown on md+ */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                <img
                  src={DoctorImage}
                  alt="Dr. Touhidi Farhana Bhinti"
                  className="w-40 lg:w-48 h-auto object-cover"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Button
                variant="primary"
                className="bg-[#6C234C] hover:hover:bg-[#10172E]"
              >
                বিস্তারিত জানতে
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
