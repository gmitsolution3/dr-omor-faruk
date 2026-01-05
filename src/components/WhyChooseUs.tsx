import { Syringe, Award, UserCircle, Hand } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Syringe size={48} className="text-yellow-400" />,
      title: "উন্নত প্রযুক্তি",
      bgColor: "bg-gradient-to-br from-[#8B4F7C] to-[#6B3F6C]",
    },
    {
      icon: <Award size={48} className="text-yellow-400" />,
      title: "সন্তুষ্টির নিশ্চয়তা",
      bgColor: "bg-[#1a2332]",
      border: true,
    },
    {
      icon: <UserCircle size={48} className="text-yellow-400" />,
      title: "পেশাদার চিকিৎসক",
      bgColor: "bg-[#1a2332]",
      border: true,
    },
    {
      icon: <Hand size={48} className="text-yellow-400" />,
      title: "নিশ্চিত সুরক্ষা সেবা",
      bgColor: "bg-gradient-to-br from-[#8B4F7C] to-[#6B3F6C]",
    },
  ];

  return (
    <section className="py-20 bg-[#0f1621]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Subtitle */}
            <p className="text-[#4285f4] font-medium text-lg">
              তুক ও যৌনস্বাস্থ্য আধুনিক চিকিৎসা
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              সবচেয়ে সেরা উপায়ে এবং যত্নের সাথে
              <br />
              অত্যন্ত নির্ভরতাবে সেবা প্রদান করা হয়
            </h2>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#8B4F7C] to-[#6B3F6C] text-white rounded-lg py-4 px-8 hover:opacity-90 transition-opacity font-medium text-lg">
                অ্যাপয়েন্টমেন্ট বুক করুন
              </button>
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  ${feature.bgColor} 
                  ${feature.border ? "border-2 border-gray-700" : ""} 
                  rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[200px] hover:scale-105 transition-transform
                `}
              >
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-semibold">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
