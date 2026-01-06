import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderSideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-[#10172E] text-white border-l-0">
        <SheetHeader>
          <SheetTitle className="text-white">
            কন্টাক্ট ডিটেইলস
            <p className="mt-5 font-normal">ডার্মাটোসার্জন</p>
          </SheetTitle>
          <SheetDescription>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-bold mb-2 text-white">
                  পপুলার ডায়াগনস্টিক সেন্টার
                </h3>
                <p className="text-sm text-gray-300">
                  রুম নং: ৫১৩ বি ব্লক, ২০/বি, কে.বি. ফজলুল কাদের রোড,
                  পাঁচলাইশ, চট্টগ্রাম।
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  (চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতালের পূর্ব গেইটের
                  পাশে)
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#423D96] mb-2">
                  Surecell Medical, Chattogram
                </h3>
                <p className="text-sm text-gray-300">
                  আল-নূর বদরুন সেন্টার (৪র্থ তলা) ১৪৮৬-১৬৭২, ও.আর.
                  নিজাম রোড প্রবর্তক মোড়, চট্টগ্রাম।
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#423D96] mb-2">ফোন</h3>
                <p className="text-sm text-gray-300">01974-896998</p>
              </div>
              <div>
                <h3 className="font-bold text-[#423D96] mb-2">
                  সময়
                </h3>
                <p className="text-sm text-gray-300">
                  প্রতিদিন বিকাল ৪টা থেকে সন্ধ্যা ৭টা পর্যন্ত
                </p>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
