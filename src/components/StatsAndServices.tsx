import { Users, Award, Syringe, UserCheck } from "lucide-react";
import FacePRCImage from "@/assets/faceprc.jpg";
import HairPRCImage from "@/assets/hairprc.jpg";
import Botox from "@/assets/botox.jpg";
import Filler from "@/assets/filler.jpg";

export default function StatsAndServicesSection() {
  const stats = [
    {
      icon: <Users size={48} className="text-[#8B4F7C]" />,
      number: "2,200",
      label: "রোগীকে সেবা প্রদান",
    },
    {
      icon: <Award size={48} className="text-[#8B4F7C]" />,
      number: "8",
      label: "বছরের অভিজ্ঞতা",
    },
    {
      icon: <Syringe size={48} className="text-[#8B4F7C]" />,
      number: "700",
      label: "ডাক্তি সমসা সমাধান",
    },
    {
      icon: <UserCheck size={48} className="text-[#8B4F7C]" />,
      number: "6",
      label: "প্রফেশনাল ট্রেনিং",
    },
  ];

  const services = [
    {
      image: FacePRCImage,
      title: "ফেস পিআরপি",
    },
    {
      image: HairPRCImage,
      title: "হেয়ার পিআরপি",
    },
    {
      image: Botox,
      title: "বোটক্স (Botox)",
    },
    {
      image: Filler,
      title: "ফিলার (Filler)",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {stat.number}
                    <span className="text-[#8B4F7C]">+</span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#4285f4] font-medium mb-2">
                তুক ও যৌনস্বাস্থ্য
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                স্পেশালাইজড সার্ভিসেস
              </h2>
            </div>
            <button className="bg-[#8B4F7C] text-white rounded-lg py-3 px-6 hover:bg-[#6B3F6C] transition-colors font-medium">
              সব সার্ভিসেস
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
