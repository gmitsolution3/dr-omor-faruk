import { Users, Award, Syringe, UserCheck } from "lucide-react";

import NasalPolypas from "@/assets/nasal-polyps.jpg";
import OrshoImage from "@/assets/orsho-service.jpeg";
import PilesImage from "@/assets/piles-service.jpg";
import GejPicture from '@/assets/gej.jpg';

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
      { image: NasalPolypas, title: "নাকের পলিপাস" },
      { image: OrshoImage, title: "অর্শ" },
      { image: GejPicture, title: "গেজ" },
      { image: PilesImage, title: "পাইলস" },
    ],
  },
};
