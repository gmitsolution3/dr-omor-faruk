import { Link } from "react-router";
import { MapPin, Phone, Menu, X } from "lucide-react";
import MenuLink from "./MenuLink";
import HeaderSideMenu from "./HeaderSideMenu";
import { Button } from "../ui/button";
import { useState } from "react";
import { headerData } from "./../../data/headerData";
import Logo from "@/assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { logo, navItems, location, phone, appointment } = headerData;

  return (
    <header className="py-4 lg:py-8">
      <div className="container mx-auto px-5 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-around gap-4 lg:gap-0">
          {/* Logo */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link
              to={logo.link}
              className="font-bold text-xl lg:text-2xl"
            >
              <img src={Logo} alt="Logo" className="w-20" />
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

          {/* Location */}
          <div className="hidden lg:flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-primary text-white p-4 rounded-t-2xl">
              <MapPin />
            </span>
            <div>
              <h3 className="font-medium">{location.title}</h3>
              <p className="text-[#525766] text-sm">
                {location.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="hidden lg:flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-primary text-white p-4 rounded-t-2xl">
              <Phone />
            </span>
            <div>
              <h3 className="font-medium">{phone.title}</h3>
              <p className="text-[#525766] text-sm">
                <a href={`tel:${phone.number}`}>{phone.number}</a>
              </p>
            </div>
          </div>

          {/* Appointment Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="primary"
              className="bg-primary hover:bg-[#10172E]"
            >
              <a href={appointment.link} target="_blank">
                {appointment.text}
              </a>
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-8 border-t border-[#EAEAEA] pt-6">
          <div className="flex items-center justify-between">
            <ul className="flex items-center space-x-8 uppercase">
              {navItems.map((item) => (
                <li key={item.name}>
                  <MenuLink
                    to={item.to}
                    className="text-primary hover:text-primary font-medium transition-colors text-sm"
                  >
                    {item.name}
                  </MenuLink>
                </li>
              ))}
            </ul>

            <HeaderSideMenu />
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-[#EAEAEA] pt-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <MenuLink
                    to={item.to}
                    className="block text-[#423D96] hover:text-primary font-medium py-2 text-sm"
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
                <span className="bg-primary text-white p-3 rounded-t-2xl">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-medium text-sm">
                    {location.title}
                  </h3>
                  <p className="text-[#525766] text-xs">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-primary text-white p-3 rounded-t-2xl">
                  <Phone size={20} />
                </span>
                <div>
                  <h3 className="font-medium text-sm">
                    {phone.title}
                  </h3>
                  <p className="text-[#525766] text-xs">
                    <a href={`tel:${phone.number}`}>{phone.number}</a>
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="primary"
                className="bg-primary hover:bg-[#10172E]"
              >
                <a href={appointment.link} target="_blank">
                  {appointment.text}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
