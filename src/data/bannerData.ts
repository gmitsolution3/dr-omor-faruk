import DoctorImage from "@/assets/dr-omor-faruk.jpg";

export const bannerData = {
  id: "banner",
  backgroundClass: "bg-primary",

  doctor: {
    name: "চিকিৎসক মোঃ ওমর ফারুক",
    image: DoctorImage,
    imageAlt: "Dr. Omor Faruk",
  },

  typingText: {
    texts: [""],
    typingSpeed: 75,
    pauseDuration: 1500,
    showCursor: true,
    cursorCharacter: "|",
    cursorClassName: "text-[#F8F329]",
    textColors: ["yellow"],
    variableSpeed: { min: 50, max: 120 },
  },

  description: `
  মোঃ ওমর ফারুক একজন অভিজ্ঞ ও সেবামনস্ক চিকিৎসক। তিনি পপুলার হেল্থ ক্লিনিকের ম্যানেজিং ডিরেক্টর হিসেবে দায়িত্ব পালন করছেন। আর এম পি ডিগ্রির পাশাপাশি তিনি ডিপ্লোমা ইন মেডিসিন (ডিএম) সম্পন্ন করেছেন এবং ডি এম এ ও ডি এম সি সার্টিফিকেশনপ্রাপ্ত। রোগীদের প্রতি আন্তরিকতা ও যত্নশীল চিকিৎসা দেওয়াই তাঁর মূল লক্ষ্য। তিনি নিয়মিত রোগী দেখেন তাঁর চেম্বারে। লোকেশনঃ বাসা # ২০৫, রোড # ০৫, সেকশন # ০৭, পল্লবি, মিরপুর, ঢাকা।

  `,

  button: {
    text: "বিস্তারিত",
  },
};
