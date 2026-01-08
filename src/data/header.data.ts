import { MapPin, Phone } from "lucide-react";

export const headerData = {
  logo: {
    text: "Dr. SK. SERJINA ANWAR",
    link: "/",
  },
  navItems: [
    { to: "banner", name: "Home" },
    { to: "banner", name: "About" },
    { to: "services", name: "Services" },
    { to: "faq", name: "Faq" },
    { to: "blog", name: "Blog" },
    { to: "gallery", name: "Gallery" },
    { to: "contact", name: "Contact" },
  ],
  contactInfo: [
    {
      icon: MapPin,
      title: "লোকেশন",
      description: "কুর্মিটলা জেনারেল হসপিটাল, ঢাকা",
    },
    {
      icon: Phone,
      title: "সিরিয়ালের জন্য",
      description: "+8801339-511108",
      link: "tel:+8801339511108",
    },
  ],
  appointmentButton: {
    text: "অ্যাপয়েন্টমেন্ট বুক করুন",
    link: "https://forms.gle/hRaBxfPtMFmPVXuW8",
  },
};
