import { ArrowRight, Check } from "lucide-react";
import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";
import TreatmentImage from "@/assets/treatment.jpg";
import DoctorImage from "@/assets/doctorImage.png";

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
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left side - Images Grid (5 columns) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={FacialImage}
                  alt="Skin treatment consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={MakeupImage}
                  alt="Facial treatment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={TreatmentImage}
                  alt="Dermatology procedure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Subtitle */}
            <p className="text-[#4285f4] font-medium">
              ডাঃ তৌহিদী ফারহানা ভিন্তি
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              তুক, এলাজি, যৌন স্বাস্থ্য চিকিৎসায় প্রায়
              <br />
              ৮+ বছরের অভিজ্ঞতা।
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
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

            {/* Services List */}
            <div className="space-y-3 flex items-center gap-x-5 justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  বিশেষত্ব
                </h3>

                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <Check
                        className="text-[#4285f4] flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-8">
                <img
                  src={DoctorImage}
                  alt="Dr. Touhidi Farhana Bhinti"
                  className="w-[190px] h-full object-cover"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#423D96] text-white rounded-t-2xl py-3 px-6 hover:bg-[#10172E] transition-colors flex items-center gap-2">
                বিস্তারিত <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
