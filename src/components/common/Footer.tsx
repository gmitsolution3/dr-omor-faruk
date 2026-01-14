import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import { footerData } from "@/data/footerData";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#10172E] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Icon and Text */}
            <div className="flex items-center gap-6">
              <div className="bg-primary rounded-t-2xl p-4 flex-shrink-0">
                <Mail size={35} />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">
                  {footerData.newsletter.title}
                </h3>
                <p className="text-gray-400 max-w-100">
                  {footerData.newsletter.description}
                </p>
              </div>
            </div>

            {/* Right - Subscribe Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerData.newsletter.placeholder}
                className="flex-1 md:w-80 px-6 py-4 rounded-l-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary transition-colors px-8 py-4 rounded-r-xl font-semibold whitespace-nowrap"
              >
                {footerData.newsletter.button}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              {footerData.about.title}
            </h4>
            <div className="space-y-3 text-gray-300">
              {footerData.about.info.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 pt-4">
              {footerData.about.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="bg-[#2d3748] hover:bg-[#8B4F7C] transition-colors p-3 rounded-lg"
                  aria-label={`Social ${idx}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              {footerData.links.title}
            </h4>
            <nav className="space-y-3">
              {footerData.links.items.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <ChevronRight size={16} />
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              {footerData.contact.title}
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed">
                  {footerData.contact.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400" />
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Work Hours */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              {footerData.hours.title}
            </h4>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock
                size={20}
                className="text-yellow-400 flex-shrink-0"
              />
              <div>
                <p className="font-semibold">
                  {footerData.hours.timing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              <a href="https://www.gmitsolution.net" target="_blank">
                {footerData.bottom.designer}
              </a>
            </p>
            <p>{footerData.bottom.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
