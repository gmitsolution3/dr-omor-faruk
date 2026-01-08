import { Users, Award, Syringe, UserCheck } from "lucide-react";

import ChildDiagnosisTwo from "@/assets/child-diagnosis-two.jpg"
import Pediatric from "@/assets/pediatric.jpg"
import NeuroDevelopment from "@/assets/neuro-development.jpg"
import Autism from "@/assets/autism.jpg"

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
    { image: ChildDiagnosisTwo, title: "চাইল্ড ডায়াগনোসিস" },
    { image: Pediatric, title: "পেডিয়েট্রিক নিউরোলজি" },
    { image: NeuroDevelopment, title: "নিউরো ডেভেলপমেন্ট" },
    { image: Autism, title: "অটিজম কন্সাল্টেন্সি" },
  ],
  sectionHeader: {
    subtitle: "পেডিয়াট্রিক ও নিউরলজি আধুনিক চিকিৎসা",
    subtitleColor: "#4285f4",
    title: "স্পেশালাইজড সার্ভিসেস",
  },
};
