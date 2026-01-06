import DoctorImage from "@/assets/doctorImage.png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import TypingText from "@/components/ui/typing-text";

export default function Banner() {
  return (
    <div id="banner" className="bg-[#10172E] py-12 lg:py-0">
      <div className="mx-auto px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
          {/* Content Section */}
          <div className="flex-1 container mx-auto flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                ডাঃ সারজিনা আনোয়ার{" "}
                <TypingText
                  text={[
                    "Pediatric Care",
                    "Cardio Care",
                    "Orthodontic",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-[#F8F329]"
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold inline-block"
                  textColors={["#F8F329", "#F8F329", "#F8F329"]}
                  variableSpeed={{ min: 50, max: 120 }}
                />
              </h3>
              <p className="text-[#A4AEBE] mb-6 font-light leading-relaxed text-sm md:text-base max-w-120">
                ডাঃ চৌধুরী ফারহানা তিন্নি চর্ম ও যৌনরোগ স্কিন,
                এলার্জি, সেক্স, অ্যাস্থেটিক মেডিসিন স্পেশালিস্ট &
                ডার্মাটোসার্জন। লেজার ও কসমেটিক সার্জারীতে বিশেষ
                প্রশিক্ষণপ্রাপ্ত ডাঃ চৌধুরী ফারহানা তিন্নি এমবিবিএস,
                বিসিএস (স্বাস্থ্য) এমডি (চর্ম ও যৌনরোগ-বিএসএমএমইউ)
                ফেলোশিপ ইন ডার্মাটোসার্জারি এস্থেটিক মেডিসিন
                সার্টিফিকেট কোর্স অন বেসিক ফেসিয়াল এসথেটিক (ইউ কে
                সিপিডি এপ্রভড)। চট্টগ্রাম মেডিকেল কলেজ।
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="bg-[#423D96] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  বিস্তারিত <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src={DoctorImage}
              alt="Dr. Chowdhury Farhana Tinni"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
