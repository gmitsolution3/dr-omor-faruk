import DoctorImage from "@/assets/doctorImage.png";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-[#10172E]">
      <div>
        <div className="flex border items-center">
          <div className="flex-1 w-full mx-auto">
            <div className="max-w-180 w-full mx-auto">
              <h3 className="text-3xl font-bold text-[#10172E] mb-4 text-white">
                ডাঃ চৌধুরী ফারহানা তিন্নি স্কিন স্পেশালিস্ট
              </h3>
              <p className="text-[#525766] mb-6 leading-relaxed">
                ডাঃ চৌধুরী ফারহানা তিন্নি চর্ম ও যৌনরোগ স্কিন,
                এলার্জি, সেক্স, অ্যাস্থেটিক মেডিসিন স্পেশালিস্ট &
                ডার্মাটোসার্জন। লেজার ও কসমেটিক সার্জারীতে বিশেষ
                প্রশিক্ষণপ্রাপ্ত ডাঃ চৌধুরী ফারহানা তিন্নি এমবিবিএস,
                বিসিএস (স্বাস্থ্য) এমডি (চর্ম ও যৌনরোগ-বিএসএমএমইউ)
                ফেলোশিপ ইন ডার্মাটোসার্জারি এস্থেটিক মেডিসিন
                সার্টিফিকেট কোর্স অন বেসিক ফেসিয়াল এসথেটিক (ইউ কে
                সিপিডি এপ্রভড)। চট্টগ্রাম মেডিকেল কলেজ।
              </p>
              <button className="bg-[#423D96] text-white rounded-t-2xl py-3 px-6 hover:bg-[#10172E] transition-colors flex items-center gap-2">
                বিস্তারিত <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex w-full justify-end">
            <img
              src={DoctorImage}
              alt="Banner Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
