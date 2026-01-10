import DoctorImage from "@/assets/doctorImage.png";
import ChildDiagnosisOne from "@/assets/child-diagnosis-one.jpg";
import Medicin from "@/assets/medicine.jpg";
import Treatment from "@/assets/treatment-two.jpg";

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
    "মৃগী ও খিঁচুনি রোগ",
    "স্নায়ু-বিকাশগত রোগ",
    "স্নায়ু-পেশী রোগ",
    "মাথাব্যথা ও মাইগ্রেন (শিশুদের)",
    "সেরিব্রাল পালসি ব্যবস্থাপনা",
    "স্নায়ু-জিনগত ও বিপাকীয় রোগ",
  ],
  images: [
    { src: ChildDiagnosisOne, alt: "Skin treatment consultation" },
    { src: Medicin, alt: "Facial treatment" },
    { src: Treatment, alt: "Dermatology procedure" },
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
