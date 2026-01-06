import { Syringe, Award, UserCircle, Hand } from "lucide-react";
import { Button } from "./ui/button";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Syringe size={48} className="text-yellow-400" />,
      title: "উন্নত প্রযুক্তি",
      bgColor: "bg-gradient-to-br from-[#6C234C] to-[#4a1835]",
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
      bgColor: "bg-gradient-to-br from-[#6C234C] to-[#4a1835]",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0f1621]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Subtitle */}
            <p className="text-[#28B9DA] font-medium text-base md:text-lg">
              তুক ও যৌনস্বাস্থ্য আধুনিক চিকিৎসা
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              সবচেয়ে সেরা উপায়ে এবং যত্নের সাথে
              <br className="hidden md:block" />
              অত্যন্ত নির্ভরতাবে সেবা প্রদান করা হয়
            </h2>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-[#6C234C] to-[#4a1835] "
              >
                অ্যাপয়েন্টমেন্ট বুক করুন
              </Button>
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  ${feature.bgColor} 
                  ${feature.border ? "border-2 border-gray-700" : ""} 
                  rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 min-h-[160px] md:min-h-[200px] hover:scale-105 transition-transform
                `}
              >
                <div className="flex items-center justify-center">
                  <div className="scale-75 md:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold leading-snug">
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
