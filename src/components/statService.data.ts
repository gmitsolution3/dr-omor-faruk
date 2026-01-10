import { Users, Award, Syringe, UserCheck } from "lucide-react";

import ChildDiagnosisTwo from "@/assets/child-diagnosis-two.jpg";
import Pediatric from "@/assets/pediatric.jpg";
import NeuroDevelopment from "@/assets/neuro-development.jpg";
import Autism from "@/assets/autism.jpg";
import MrigiImg from "@/assets/mrigi-rog.webp";
import SnayoBikash from "@/assets/snayo-bikash.jpg";
import SnayoPeshi from "@/assets/snayo-peshi.png";
import SeribalPlesy from "@/assets/seribal-plesy.jpg";
import ChildMigrane from "@/assets/child-migrane.webp";
import SnayoBipak from "@/assets/snayo-bipak.webp";
import SnayoBidda from "@/assets/snayo-bidda.webp";

export const statsServicesData = {
  id: "gallery",
  bgColor: "bg-gray-50",
  stats: [
    { icon: Users, number: "৫০০০", label: "রোগীকে সেবা প্রদান" },
    { icon: Award, number: "১৮", label: "বছরের অভিজ্ঞতা" },
    { icon: Syringe, number: "১০০০", label: "জটিল সমস্যা সমাধান" },
    { icon: UserCheck, number: "২২", label: "প্রফেশনাল ট্রেনিং" },
  ],
  services: [
    { image: ChildDiagnosisTwo, title: "চাইল্ড ডায়াগনোসিস" },
    { image: Pediatric, title: "পেডিয়েট্রিক নিউরোলজি" },
    { image: NeuroDevelopment, title: "নিউরো ডেভেলপমেন্ট" },
    { image: Autism, title: "অটিজম কন্সাল্টেন্সি" },
    { image: MrigiImg, title: "মৃগী ও খিঁচুনি রোগ" },
    { image: SnayoBikash, title: "স্নায়ু-বিকাশগত রোগ" },
    { image: SnayoPeshi, title: "স্নায়ু-পেশী রোগ" },
    { image: SeribalPlesy, title: "সেরিব্রাল পালসি ব্যবস্থাপনা" },
    { image: ChildMigrane, title: "মাথাব্যথা ও মাইগ্রেন (শিশুদের)" },
    { image: SnayoBipak, title: "স্নায়ু-জিনগত ও বিপাকীয় রোগ" },
    { image: SnayoBipak, title: "স্নায়ু-সংক্রমণ ও প্রদাহজনিত রোগ" },
    { image: SnayoBidda, title: "নবজাতকের স্নায়ুবিদ্যা" },
  ],
  sectionHeader: {
    subtitle: "পেডিয়াট্রিক ও নিউরলজি আধুনিক চিকিৎসা",
    subtitleColor: "#4285f4",
    title: "স্পেশালাইজড সার্ভিসেস",
  },
};
