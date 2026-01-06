import { Link } from "react-router";
import { MapPin, Phone, Menu, X } from "lucide-react";
import MenuLink from "./MenuLink";
import HeaderSideMenu from "./HeaderSideMenu";
import { Button } from "../ui/button";
import { useState } from "react";

const navItems = [
  {
    to: "banner",
    name: "Home",
  },
  {
    to: "banner",
    name: "About",
  },
  {
    to: "services",
    name: "Services",
  },
  {
    to: "faq",
    name: "Faq",
  },
  {
    to: "blog",
    name: "Blog",
  },
  {
    to: "gallery",
    name: "Gallery",
  },
  {
    to: "contact",
    name: "Contact",
  },
];

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
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
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
              className="bg-[#6C234C] hover:bg-[#10172E]"
            >
              অ্যাপয়েন্টমেন্ট বুক করুন
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-8 border-t border-[#EAEAEA] pt-6">
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-start space-x-8 uppercase">
              {navItems.map((item) => (
                <li>
                  <MenuLink
                    to={item.to}
                    className="text-[#423D96] hover:text-[#6C234C] font-medium transition-colors text-sm"
                  >
                    {item.name}
                  </MenuLink>
                </li>
              ))}
            </ul>

            <div>
              <HeaderSideMenu />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-[#EAEAEA] pt-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li>
                  <MenuLink
                    to={item.to}
                    className="block text-[#423D96] hover:text-[#6C234C] font-medium transition-colors py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </MenuLink>
                </li>
              ))}
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
                  <h3 className="font-medium text-sm">
                    সিরিয়ালের জন্য
                  </h3>
                  <p className="text-[#525766] text-xs">
                    01893730341
                  </p>
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
