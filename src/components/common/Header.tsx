import { Link } from "react-router";
import { MapPin, Phone, Menu, X } from "lucide-react";
import MenuLink from "./MenuLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 lg:py-8">
      <div className="container mx-auto px-5 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-around gap-4 lg:gap-0">
          {/* Logo */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link to="/" className="font-bold text-xl lg:text-2xl">
              Dr. SK Serjina Anwar
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Contact Info - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-[#6C234C] text-white p-4 rounded-t-2xl">
              <MapPin />
            </span>
            <div>
              <h3 className="font-medium">লোকেশন</h3>
              <p className="text-[#525766] text-sm">
                পাঁচলাইশ, প্রবর্তক মোড়, চট্টগ্রাম
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-[#6C234C] text-white p-4 rounded-t-2xl">
              <Phone />
            </span>
            <div>
              <h3 className="font-medium">সিরিয়ালের জন্য</h3>
              <p className="text-[#525766] text-sm">01893730341</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              className="bg-[#6C234C] hover:bg-[#10172E] transition-colors"
            >
              অ্যাপয়েন্টমেন্ট বুক করুন
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-8 border-t border-[#EAEAEA] pt-6">
          <div className="flex items-center justify-between">
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
                          <h3 className="font-bold mb-2 text-white">
                            পপুলার ডায়াগনস্টিক সেন্টার
                          </h3>
                          <p className="text-sm text-gray-300">
                            রুম নং: ৫১৩ বি ব্লক, ২০/বি, কে.বি. ফজলুল
                            কাদের রোড, পাঁচলাইশ, চট্টগ্রাম।
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            (চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতালের পূর্ব
                            গেইটের পাশে)
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#423D96] mb-2">
                            Surecell Medical, Chattogram
                          </h3>
                          <p className="text-sm text-gray-300">
                            আল-নূর বদরুন সেন্টার (৪র্থ তলা) ১৪৮৬-১৬৭২,
                            ও.আর. নিজাম রোড প্রবর্তক মোড়, চট্টগ্রাম।
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#423D96] mb-2">
                            ফোন
                          </h3>
                          <p className="text-sm text-gray-300">
                            01974-896998
                          </p>
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
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-[#EAEAEA] pt-4">
            <ul className="space-y-3">
              <li>
                <MenuLink
                  to="/"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/about"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/services"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/faq"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/blog"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/gallery"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </MenuLink>
              </li>
              <li>
                <MenuLink
                  to="/contact"
                  className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </MenuLink>
              </li>
            </ul>

            {/* Mobile Contact Info */}
            <div className="mt-6 space-y-4 border-t border-[#EAEAEA] pt-4">
              <div className="flex items-center space-x-3">
                <span className="bg-[#6C234C] text-white p-3 rounded-t-2xl">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-medium text-sm">লোকেশন</h3>
                  <p className="text-[#525766] text-xs">
                    পাঁচলাইশ, প্রবর্তক মোড়, চট্টগ্রাম
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-[#6C234C] text-white p-3 rounded-t-2xl">
                  <Phone size={20} />
                </span>
                <div>
                  <h3 className="font-medium text-sm">সিরিয়ালের জন্য</h3>
                  <p className="text-[#525766] text-xs">01893730341</p>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full bg-[#6C234C] hover:bg-[#10172E] transition-colors"
              >
                অ্যাপয়েন্টমেন্ট বুক করুন
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}