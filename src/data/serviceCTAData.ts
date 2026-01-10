import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";
import TreatmentImage from "@/assets/treatment.jpg";
import DoctorImage from "@/assets/dr-omor-faruk.jpg";

import PolypasImage from "@/assets/polypas.webp";
import OrshoImage from "@/assets/orsho.webp";
import GejPicture from "@/assets/gej.jpg";

export const servicesCTAData = {
  id: "services",
  sectionClass: "py-12 md:py-16 lg:py-20 bg-gray-50",

  images: {
    grid: [
      {
        src: PolypasImage,
        alt: "Skin treatment consultation",
        className: "h-48 md:h-64 lg:h-80",
      },
      {
        src: OrshoImage,
        alt: "Facial treatment",
        className: "h-48 md:h-64 lg:h-80",
      },
      {
        src: GejPicture,
        alt: "Dermatology procedure",
        className: "h-48 md:h-64 lg:h-72 col-span-2 object-contain",
      },
    ],
  },

  subtitle: "ডাঃ ওমর ফারুক",

  heading: {
    line1: "পলিপাস, অর্শ, গেজ, ফিস্টুলা চিকিৎসায়",
    line2: "১১+ বছরের অভিজ্ঞতা।",
  },

  description: [
    "ডাঃ ওমর ফারুক – একজন অভিজ্ঞ ও মানবিক চিকিৎসক এবং পপুলার হেলথ ক্লিনিকের ম্যানেজিং ডিরেক্টর। বিনা অপারেশনে স্থায়ী চিকিৎসা প্রদানই তাঁর প্রধান লক্ষ্য। নাকের পলিপাস, মাংস বৃদ্ধি, অর্শ, গেজ, পাইলস, ফিস্টুলা ও গলার টনসিলের সমস্যায় আধুনিক ও ফলপ্রসূ চিকিৎসা পদ্ধতিতে তিনি বিশেষভাবে প্রশিক্ষণপ্রাপ্ত।",
    "দীর্ঘ অভিজ্ঞতা, আন্তরিকতা ও রোগী-কেন্দ্রিক সেবার মাধ্যমে সুস্থ ও স্বাভাবিক জীবন ফিরিয়ে দেওয়াই একজন দায়িত্বশীল ও অভিজ্ঞ চিকিৎসক হিসেবে তাঁর একমাত্র অঙ্গীকার।",
  ],

  specialties: [
    "নাকের পলিপাস (Nasal Polyp)",
    "অর্শ (Fistula / Hemorrhoids)",
    "গেজ (Pilonidal Sinus)",
    "পাইলস (Piles)",
    "ফিস্টুলা (Fistula)",
    "বন্ধ্যাত্ব নিরাময় (Infertility Treatment)",
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
