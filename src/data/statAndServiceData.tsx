import { Users, Award, Syringe, UserCheck } from "lucide-react";
import FacePRCImage from "@/assets/faceprc.jpg";
import HairPRCImage from "@/assets/hairprc.jpg";
import Botox from "@/assets/botox.jpg";
import Filler from "@/assets/filler.jpg";

// import NasalPolypas from "@/assets/nasal-polyps.jpg"

export const statsAndServicesData = {
  id: "gallery",
  sectionClass: "py-12 md:py-16 lg:py-20 bg-gray-50",

  stats: [
    {
      icon: <Users size={48} className="text-primary" />,
      number: "৫৫০০",
      label: "রোগীকে সেবা প্রদান",
    },
    {
      icon: <Award size={48} className="text-primary" />,
      number: "১১",
      label: "বছরের অভিজ্ঞতা",
    },
    {
      icon: <Syringe size={48} className="text-primary" />,
      number: "১০৫০",
      label: "জটিল সমস্যা সমাধান",
    },
    {
      icon: <UserCheck size={48} className="text-primary" />,
      number: "১১",
      label: "প্রফেশনাল ট্রেনিং",
    },
  ],

  servicesSection: {
    subtitle: "পলিপাস, পাইলস, ফিস্টুলা",
    heading: "স্পেশালাইজড সার্ভিসেস",
    cta: {
      text: "সব সার্ভিসেস",
    },
    servicesGrid: [
      { image: FacePRCImage, title: "নাকের পলিপাস" },
      { image: HairPRCImage, title: "অর্শ" },
      { image: Botox, title: "গেজ" },
      { image: Filler, title: "পাইলস" },
    ],
  },
};
