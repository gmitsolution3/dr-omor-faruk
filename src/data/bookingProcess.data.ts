import {
  FileText,
  Users,
  UserCheck,
  Syringe,
  Clock,
} from "lucide-react";
import FacialImage from "@/assets/autism.jpg";
import TreatmentImage from "@/assets/treatment-two.jpg";

export const bookingProcessData = {
  id: "blog",
  bgColor: "bg-gray-50",
  headingSection: {
    subtitle: "বুকিং সিস্টেম",
    subtitleColor: "#423D96",
    title: "মাত্র ৪টি সহজ পদক্ষেপ এর মাধ্যমে সেবা নিন",
  },
  steps: [
    {
      number: "01",
      icon: FileText,
      title: "অ্যাপয়েন্টমেন্ট বুকিং এর আবেদন করুন",
    },
    {
      number: "02",
      icon: Users,
      title: "অ্যাপয়েন্টমেন্ট বুকিং ফর্ম পুরন করুন",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "ফোন করে আপনাকে কনফার্ম করা হবে",
    },
    {
      number: "04",
      icon: Syringe,
      title: "সরাসরি চেম্বারে এসে বা অনলাইনে সেবা নিন",
    },
  ],
  images: [TreatmentImage, FacialImage],
  contactCard: {
    bgColor: "#1a2332",
    workingHours: {
      label: "রোগী দেখার সময়",
      icon: Clock,
      iconSize: 18,
      time: "প্রতিদিন সকাল ৭টা থেকে রাত ৯টা",
      textColor: "#A4AEBE",
    },
    phone: {
      label: "সিরিয়ালের জন্য",
      number: ["01339511108", "01992222555", "01992222777"],
      buttonBg: "bg-primary",
      iconSize: 24,
    },
  },
};
