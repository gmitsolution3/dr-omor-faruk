import { FileText, Users, UserCheck, Syringe } from "lucide-react";
import Orsho from "@/assets/orsho.webp";
import Piles from "@/assets/piles-img.webp";

export const bookingProcessData = {
  id: "blog",
  sectionClass: "py-12 md:py-16 lg:py-20 bg-gray-50",

  header: {
    subtitle: "বুকিং সিস্টেম",
    heading: "মাত্র ৪টি সহজ পদক্ষেপ এর মাধ্যমে সেবা নিন",
  },

  steps: [
    {
      number: "01",
      icon: <FileText size={32} className="text-white" />,
      title: "অ্যাপয়েন্টমেন্ট বুকিং এর আবেদন করুন",
    },
    {
      number: "02",
      icon: <Users size={32} className="text-white" />,
      title: "অ্যাপয়েন্টমেন্ট বুকিং ফর্ম পুরন করুন",
    },
    {
      number: "03",
      icon: <UserCheck size={32} className="text-white" />,
      title: "ফোন করে আপনাকে কনফার্ম করা হবে",
    },
    {
      number: "04",
      icon: <Syringe size={32} className="text-white" />,
      title: "সরাসরি চেন্বরে এসে সেবা নিন",
    },
  ],

  images: [
    {
      src: Orsho,
      alt: "Skin treatment",
      className: "rounded-tl-2xl",
    },
    {
      src: Piles,
      alt: "Facial treatment",
      className: "rounded-tr-2xl",
    },
  ],

  contactCard: {
    workingHours: {
      title: "রোগী দেখার সময়",
      hours: "প্রতিদিন বিকাল ৪ টা থেকে রাত ৯ টা",
    },
    phone: {
      label: "সিরিয়ালের জন্য",
      number: "01991482596",
    },
  },
};
