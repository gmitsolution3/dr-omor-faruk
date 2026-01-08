import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";
import TreatmentImage from "@/assets/treatment.jpg";
import DoctorImage from "@/assets/doctorImage.png";

export const servicesData = {
  id: "services",
  bgColor: "bg-gray-50",
  subtitle: "ডাঃ শেখ সারজিনা আনোয়ার",
  heading:
    "পেডিয়াট্রিক নিউরোলোজি এন্ড ডেভেলপমেন্ট চিকিৎসায় প্রায়\n১৮+ বছরের অভিজ্ঞতা।",
  description: [
    "ডাঃ শেখ সারজিনা আনোয়ার – একজন দক্ষ শিশু বিশেষজ্ঞ এবং নিউরোলজি ডেভেলপমেন্ট বিশেষজ্ঞ ।",
    "শিশুদের স্নায়ু জনিত সমস্যা, অটিজম, ডাউন সিন্ড্রোম, মাথা ব্যাথা, মাইগ্রেন জাতীয় সমস্যায় দক্ষ বিশেষজ্ঞ।",
  ],
  services: [
    "জর, সর্দি, কাশি",
    "শ্বাসকস্ট, বমি, কোষ্ঠকাঠিন্য",
    "দুর্বলতা, শরীর ফ্যাকাশে/হলদে হয়ে যাওয়া, বৃদ্ধি না পাওয়া",
    "শিশুদের বিকাশজনিত সমস্যা/ভ্যাক্সিন সমস্যা/চোখের সমস্যা",
  ],
  images: [
    { src: FacialImage, alt: "Skin treatment consultation" },
    { src: MakeupImage, alt: "Facial treatment" },
    { src: TreatmentImage, alt: "Dermatology procedure" },
  ],
  doctor: {
    image: DoctorImage,
    alt: "Dr. Touhidi Farhana Bhinti",
  },
  button: {
    text: "বিস্তারিত জানতে",
    variant: "primary",
    className: "bg-primary hover:hover:bg-[#10172E]",
  },
};
