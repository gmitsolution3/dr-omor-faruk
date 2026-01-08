import { Syringe, Award, UserCircle, Hand } from "lucide-react";

export const whyChooseUsData = {
  id: "faq",
  bgColor: "#0f1621",
  subtitle: "পেডিয়াট্রিক ও নিউরলজি আধুনিক চিকিৎসা",
  subtitleColor: "#28B9DA",
  heading:
    "সবচেয়ে সেরা উপায়ে এবং যত্নের সাথে\nঅত্যন্ত নির্ভরতাবে সেবা প্রদান করা হয়",
  button: {
    text: "অ্যাপয়েন্টমেন্ট বুক করুন",
    variant: "primary",
    className: "bg-primary hover:bg-[#10172E]",
    link: "https://forms.gle/hRaBxfPtMFmPVXuW8",
  },
  features: [
    {
      icon: Syringe,
      title: "উন্নত প্রযুক্তি",
      bgColor: "bg-gradient-to-br from-primary to-[#4a1835]",
      rounded: "rounded-tl-[40px]",
      border: false,
      iconColor: "text-yellow-400",
    },
    {
      icon: Award,
      title: "সন্তুষ্টির নিশ্চয়তা",
      bgColor: "bg-[#1a2332]",
      rounded: "rounded-tr-[40px]",
      border: true,
      iconColor: "text-yellow-400",
    },
    {
      icon: UserCircle,
      title: "পেশাদার চিকিৎসক",
      bgColor: "bg-[#1a2332]",
      rounded: "rounded-bl-[40px]",
      border: true,
      iconColor: "text-yellow-400",
    },
    {
      icon: Hand,
      title: "নিশ্চিত সুরক্ষা সেবা",
      bgColor: "bg-gradient-to-br from-primary to-[#4a1835]",
      rounded: "rounded-br-[40px]",
      border: false,
      iconColor: "text-yellow-400",
    },
  ],
};