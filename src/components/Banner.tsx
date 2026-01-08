import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TypingText from "@/components/ui/typing-text";
import { bannerData } from "@/data/bannerData";

export default function Banner() {
  const {
    id,
    backgroundClass,
    doctor,
    typingText,
    description,
    button,
  } = bannerData;

  return (
    <div id={id} className={`${backgroundClass} py-12 lg:py-0`}>
      <div className="mx-auto px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
          {/* Content Section */}
          <div className="flex-1 container mx-auto flex items-center justify-center">
            <div className="max-w-2xl w-full mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                {doctor.name}{" "}
                <TypingText
                  text={typingText.texts}
                  typingSpeed={typingText.typingSpeed}
                  pauseDuration={typingText.pauseDuration}
                  showCursor={typingText.showCursor}
                  cursorCharacter={typingText.cursorCharacter}
                  cursorClassName={typingText.cursorClassName}
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold inline-block"
                  textColors={typingText.textColors}
                  variableSpeed={typingText.variableSpeed}
                />
              </h3>

              <p className="text-[#ffffff] mb-6 font-light leading-relaxed text-sm md:text-base max-w-120">
                {description}
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="bg-white hover:bg-white text-primary transition-all duration-300 flex items-center gap-2"
                >
                  {button.text} <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src={doctor.image}
              alt={doctor.imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
