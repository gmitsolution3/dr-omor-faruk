import {
  FileText,
  Users,
  UserCheck,
  Syringe,
  Phone,
  Clock,
} from "lucide-react";
import FacialImage from "@/assets/facial.jpg";
import TreatmentImage from "@/assets/treatment.jpg";

export default function BookingProcess() {
  const steps = [
    {
      number: "01",
      icon: <FileText size={32} className="text-white" />,
      title: "অ্যাপয়েন্টমেন্ট বুকিং এর আবেদন করুন",
    },
    {
      number: "02",
      icon: <Users size={32} className="text-white" />,
      title: "অ্যাপয়েন্টমেন্ট বুকিং রিসিট করা হবে",
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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Process Steps */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-3">
              <p className="text-[#4285f4] font-medium">
                বুকিং সিস্টেম
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                মাত্র ৪টি সহজ পদক্ষেপ এর মাধ্যমে সেবা নিন
              </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  {/* Icon with number */}
                  <div className="relative inline-block">
                    <div className="bg-[#8B4F7C] rounded-2xl p-6 inline-block">
                      {step.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#1a2332] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images and Contact Card */}
          <div className="space-y-6">
            {/* Top Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={TreatmentImage}
                  alt="Skin treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={FacialImage}
                  alt="Facial treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#1a2332] rounded-3xl p-8 text-white">
              <div className="space-y-6">
                {/* Working Hours */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">
                    রোগী দেখার সময়
                  </h3>
                  <div className="flex items-center gap-3 text-[#4285f4]">
                    <Clock size={20} />
                    <p className="text-lg">
                      প্রতিদিন বিকাল ৩টা থেকে রাত ৮টা
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600"></div>

                {/* Contact Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      সিরিয়ালের জন্য
                    </p>
                    <p className="text-xl font-semibold">
                      01974-896998
                    </p>
                  </div>
                  <button className="bg-[#8B4F7C] hover:bg-[#6B3F6C] transition-colors rounded-2xl p-4">
                    <Phone size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
