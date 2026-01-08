import DoctorImage from "@/assets/doctorImage.png";

export const bannerData = {
  id: "banner",
  bgColor: "#10172E",
  doctorName: "ডাঃ শেখ সারজিনা আনোয়ার",
  description: `ডাঃ শেখ সারজিনা আনোয়ার 
      Child specialist, Paediatric Neurologiest, Neuro Development Specialist. বাচ্চাদের সর্দি, জ্বর শাসকস্ট, বমি, কোষ্ঠকাঠিন্য সহ শিশু দের বিকাশ জনিত সমস্যা নিরাময়ে দক্ষ ডাঃ শেখ সারজিনা আনোয়ার এমবিবিএস,
      বিসিএস (স্বাস্থ্য), এফসিপিএস (শিশু রোগ), এমডি(পেডিয়াট্রিক নিউরোলোজি এন্ড ডেভেলপমেন্ট)। 
      কুর্মিটলা জেনারেল হাসপাতাল।`,
  typingText: {
    items: [
      "Paediatric",
      "Paediatric Neurologist",
      "Neurological Disorder",
      "Child Specialist",
    ],
    typingSpeed: 75,
    pauseDuration: 1500,
    showCursor: true,
    cursorCharacter: "|",
    cursorClassName: "text-[#F8F329]",
    textColors: ["#F8F329", "#F8F329", "#F8F329"],
    variableSpeed: { min: 50, max: 120 },
  },
  button: {
    text: "বিস্তারিত",
    variant: "primary",
    className:
      "bg-[#423D96] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2",
  },
  image: {
    src: DoctorImage,
    alt: "Dr. Chowdhury Farhana Tinni",
  },
};
