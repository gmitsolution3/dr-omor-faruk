import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TypingText from "@/components/ui/typing-text";
import { bannerData } from "@/data/banner.data";

type TButton =
  | "primary"
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

export default function Banner() {
  return (
    <div
      id={bannerData.id}
      className={`bg-[${bannerData.bgColor}] py-12 lg:py-0`}
    >
      <div className="mx-auto px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
          {/* Content Section */}
          <div className="flex-1 container mx-auto flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                {bannerData.doctorName}{" "}
                <TypingText
                  text={bannerData.typingText.items}
                  typingSpeed={bannerData.typingText.typingSpeed}
                  pauseDuration={bannerData.typingText.pauseDuration}
                  showCursor={bannerData.typingText.showCursor}
                  cursorCharacter={
                    bannerData.typingText.cursorCharacter
                  }
                  cursorClassName={
                    bannerData.typingText.cursorClassName
                  }
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold inline-block"
                  textColors={bannerData.typingText.textColors}
                  variableSpeed={bannerData.typingText.variableSpeed}
                />
              </h3>

              <p className="text-[#A4AEBE] mb-6 font-light leading-relaxed text-sm md:text-base max-w-120">
                {bannerData.description}
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button
                  variant={bannerData.button.variant as TButton}
                  className={bannerData.button.className}
                >
                  {bannerData.button.text} <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src={bannerData.image.src}
              alt={bannerData.image.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
