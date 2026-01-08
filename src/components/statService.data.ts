import { Users, Award, Syringe, UserCheck } from "lucide-react";
import FacePRCImage from "@/assets/faceprc.jpg";
import HairPRCImage from "@/assets/hairprc.jpg";
import Botox from "@/assets/botox.jpg";
import Filler from "@/assets/filler.jpg";

export const statsServicesData = {
  id: "gallery",
  bgColor: "bg-gray-50",
  stats: [
    { icon: Users, number: "২২০০", label: "রোগীকে সেবা প্রদান" },
    { icon: Award, number: "১৮", label: "বছরের অভিজ্ঞতা" },
    { icon: Syringe, number: "৮০০", label: "জটিল সমস্যা সমাধান" },
    { icon: UserCheck, number: "৬", label: "প্রফেশনাল ট্রেনিং" },
  ],
  services: [
    { image: FacePRCImage, title: "চাইল্ড ডায়াগনোসিস" },
    { image: HairPRCImage, title: "পেডিয়েট্রিক নিউরোলজি" },
    { image: Botox, title: "নিউরো ডেভেলপমেন্ট" },
    { image: Filler, title: "অটিজম কন্সাল্টেন্সি" },
  ],
  sectionHeader: {
    subtitle: "পেডিয়াট্রিক ও নিউরলজি আধুনিক চিকিৎসা",
    subtitleColor: "#4285f4",
    title: "স্পেশালাইজড সার্ভিসেস",
  },
};
