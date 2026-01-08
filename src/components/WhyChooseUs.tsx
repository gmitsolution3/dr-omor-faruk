import { Syringe, Award, UserCircle, Hand } from "lucide-react";
import { Button } from "./ui/button";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Syringe size={48} className="text-yellow-400" />,
      title: "উন্নত প্রযুক্তি",
      bgColor: "bg-white",
      rounded: "rounded-tl-[40px]",
    },
    {
      icon: <Award size={48} className="text-yellow-400" />,
      title: "সন্তুষ্টির নিশ্চয়তা",
      bgColor: "bg-white",
      border: true,
      rounded: "rounded-tr-[40px]",
    },
    {
      icon: <UserCircle size={48} className="text-yellow-400" />,
      title: "পেশাদার চিকিৎসক",
      bgColor: "bg-white",
      border: true,
      rounded: "rounded-bl-[40px]",
    },
    {
      icon: <Hand size={48} className="text-yellow-400" />,
      title: "নিশ্চিত সুরক্ষা সেবা",
      bgColor: "bg-white",
      rounded: "rounded-br-[40px]",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Subtitle */}
            <p className="text-white font-medium text-base md:text-lg">
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
                asChild
                variant="primary"
                className="bg-white text-primary hover:bg-white"
              >
                <a
                  href="https://forms.gle/hRaBxfPtMFmPVXuW8"
                  target="_blank"
                >
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  ${feature.bgColor} 
                  ${feature.rounded}
                  ${
                    feature.border ? "border-2 border-primary/50" : ""
                  } 
                  p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 min-h-[160px] md:min-h-[200px] hover:scale-105 transition-transform !text-primary
                `}
              >
                <div className="flex items-center justify-center">
                  <div className="scale-75 md:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className=" md:text-lg lg:text-xl font-semibold leading-snug">
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
