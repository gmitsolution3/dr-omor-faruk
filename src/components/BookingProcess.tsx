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
    <section id="blog" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Process Steps */}
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="space-y-3">
              <p className="text-primary font-medium text-sm md:text-base">
                বুকিং সিস্টেম
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                মাত্র ৪টি সহজ পদক্ষেপ এর মাধ্যমে সেবা নিন
              </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {steps.map((step, index) => (
                <div key={index} className="space-y-3 sm:space-y-4">
                  {/* Icon with number */}
                  <div className="relative inline-block">
                    <div className="bg-primary rounded-t-2xl p-4 sm:p-5 md:p-6 inline-block">
                      {step.icon}
                    </div>
                    <div className="absolute top-4 -right-8 bg-white text-primary rounded-t-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg border border-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="md:text-xl text-lg font-light text-gray-900 leading-snug max-w-52">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images and Contact Card */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-tl-2xl overflow-hidden aspect-square">
                <img
                  src={TreatmentImage}
                  alt="Skin treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-tr-2xl overflow-hidden aspect-square">
                <img
                  src={FacialImage}
                  alt="Facial treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary rounded-b-2xl p-6 sm:p-8 text-white">
              <div className="flex items-cennter justify-between space-y-4 sm:space-y-6">
                {/* Working Hours */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    রোগী দেখার সময়
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3 text-[#A4AEBE]">
                    <Clock size={18} className="sm:w-5 sm:h-5" />
                    <p className="text-white sm:text-lg">
                      প্রতিদিন বিকাল ৩টা থেকে রাত ৮টা
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600"></div>

                {/* Contact Button */}
                <div className="flex flex-col-reverse items-center justify-center gap-2">
                  <div className="text-center">
                    <p className="text-white text-xs sm:text-sm mb-1">
                      সিরিয়ালের জন্য
                    </p>
                    <p className="text-lg text-white font-semibold break-all">
                      01974-896998
                    </p>
                  </div>
                  <button className="bg-white text-primary transition-colors rounded-t-2xl p-3 sm:p-4">
                    <Phone size={24} className="sm:w-7 sm:h-7" />
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
