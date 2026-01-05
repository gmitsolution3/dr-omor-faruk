import { Link } from "react-router";
import { MapPin, Phone, Menu } from "lucide-react";
import MenuLink from "./MenuLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-around">
          <div>
            <Link to="/" className="font-bold text-2xl">
              Dr. SK Serjina Anwar
            </Link>
          </div>

          <div className="flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-[#6C234C] text-white p-4 rounded-t-2xl">
              <MapPin />
            </span>
            <div>
              <h3 className="font-medium">লোকেশন</h3>
              <p className="text-[#525766]">
                পাঁচলাইশ, প্রবর্তক মোড়, চট্টগ্রাম
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-[#6C234C] text-white p-4 rounded-t-2xl">
              <Phone />
            </span>
            <div>
              <h3 className="font-medium">সিরিয়ালের জন্য</h3>
              <p className="text-[#525766]">01893730341</p>
            </div>
          </div>

          <div>
            <button className="bg-[#6C234C] text-white rounded-t-2xl py-3 px-4 hover:bg-[#10172E] transition-colors">
              অ্যাপয়েন্টমেন্ট বুক করুন
            </button>
          </div>
        </div>

        <nav className="mt-8 border-t border-[#EAEAEA] pt-6 flex items-center justify-between">
          <ul className="flex items-center justify-start space-x-8 uppercase">
            <li>
              <MenuLink
                to="/"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                Home
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/about"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                About
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/services"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                Services
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/faq"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                FAQ
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/blog"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                Blog
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/gallery"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                Gallery
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="/contact"
                className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors"
              >
                Contact
              </MenuLink>
            </li>
          </ul>

          <div>
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
                        <h3 className="font-bold mb-2">
                          পপুলার ডায়াগনস্টিক সেন্টার
                        </h3>
                        <p className="text-sm text-[#525766]">
                          রুম নং: ৫১৩ বি ব্লক, ২০/বি, কে.বি. ফজলুল
                          কাদের রোড, পাঁচলাইশ, চট্টগ্রাম।
                        </p>
                        <p className="text-xs text-[#525766]">
                          (চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতালের পূর্ব
                          গেইটের পাশে)
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#423D96] mb-2">
                          Surecell Medical, Chattogram
                        </h3>
                        <p className="text-sm text-[#525766]">
                          আল-নূর বদরুন সেন্টার (৪র্থ তলা) ১৪৮৬-১৬৭২,
                          ও.আর. নিজাম রোড প্রবর্তক মোড়, চট্টগ্রাম।
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#423D96] mb-2">
                          ফোন
                        </h3>
                        <p className="text-sm text-[#525766]">
                          01974-896998
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#423D96] mb-2">
                          সময়
                        </h3>
                        <p className="text-sm text-[#525766]">
                          প্রতিদিন বিকাল ৪টা থেকে সন্ধ্যা ৭টা পর্যন্ত
                        </p>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
