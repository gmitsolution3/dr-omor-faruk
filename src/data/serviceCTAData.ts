import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";
import TreatmentImage from "@/assets/treatment.jpg";
import DoctorImage from "@/assets/doctorImage.png";

export const servicesCTAData = {
  id: "services",
  sectionClass: "py-12 md:py-16 lg:py-20 bg-gray-50",

  images: {
    grid: [
      {
        src: FacialImage,
        alt: "Skin treatment consultation",
        className: "h-48 md:h-64 lg:h-80",
      },
      {
        src: MakeupImage,
        alt: "Facial treatment",
        className: "h-48 md:h-64 lg:h-80",
      },
      {
        src: TreatmentImage,
        alt: "Dermatology procedure",
        className: "h-48 md:h-64 lg:h-72 col-span-2",
      },
    ],
  },

  subtitle: "ডাঃ ওমর ফারুক",

  heading: {
    line1: "পলিপাস, অর্শ, গেজ, ফিস্টুলা চিকিৎসায়",
    line2: "১১+ বছরের অভিজ্ঞতা।",
  },

  description: [
    "ডাঃ ওমর ফারুক – একজন বিশেষজ্ঞ স্কিন, এলাজি, সেক্স ও অ্যাথেটিক মেডিসিন স্পেশালিস্ট এবং ডায়েটেশিয়ান। অনিদ্রিক চিকিৎসা ও প্রযুক্তি সহজে তার নিম্নমানের চিন লেখায় ও ফলমুখী সাস্থ্যবিধি পিছনে প্রশিক্ষণতত্ব।",
    "যুব তুক, নিবীর জীবন ও আন্তরিকতা সৌন্দর্যের জন্য অক্লা লক্ষ্য একজন অভিজ্ঞ স্পেশালিস্ট এর উপর।",
  ],

  specialties: [
    "ফেস পিআরপি (Face PRP)",
    "হেয়ার পিআরপি (Hair PRP)",
    "কার্মিকেল পিলিং",
    "বোটক্স (Botox)",
    "ফিলার (Filler)",
    "ভিভা, আচিল দূষীকরণ",
  ],

  doctorImage: {
    src: DoctorImage,
    alt: "Dr. Touhidi Farhana Bhinti",
    className: "w-40 lg:w-48",
  },

  cta: {
    text: "বিস্তারিত জানতে",
  },
};
