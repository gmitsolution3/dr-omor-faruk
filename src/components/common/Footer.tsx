import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Icon and Text */}
            <div className="flex items-center gap-6">
              <div className="bg-[#8B4F7C] rounded-2xl p-6 flex-shrink-0">
                <Mail size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  নিউজলেটার সাবস্ক্রাইব করুন
                </h3>
                <p className="text-gray-400">
                  এগামে তুক ও যৌনস্বাস্থ্য সচেতনতামূলক মূলক নানা রকম
                  বিষয় নিয়ে আর্টিকেল পাবলিস করা হবা।
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
                placeholder="আপনার ইমেইল অ্যাড্রেস দিন"
                className="flex-1 md:w-80 px-6 py-4 rounded-l-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8B4F7C]"
                required
              />
              <button
                type="submit"
                className="bg-[#8B4F7C] hover:bg-[#6B3F6C] transition-colors px-8 py-4 rounded-r-xl font-semibold whitespace-nowrap"
              >
                সাবস্ক্রাইব
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
              About Us
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>Dr.Chowdhury Farhana Tinnee</p>
              <p>MBBS, BCS (Health)</p>
              <p>M.D (Dermatology & Venerology-BSMMU)</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="bg-[#2d3748] hover:bg-[#8B4F7C] transition-colors p-3 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2d3748] hover:bg-[#8B4F7C] transition-colors p-3 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2d3748] hover:bg-[#8B4F7C] transition-colors p-3 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2d3748] hover:bg-[#8B4F7C] transition-colors p-3 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ChevronRight size={16} />
                About Us
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ChevronRight size={16} />
                Services
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ChevronRight size={16} />
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              Contact Details
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed">
                  Room no- 513,B block Popular diagnostic centre
                  Chattogram (Opposite to Chittagong medical College)
                  20b K.B. Fazlul Kader Rd, Chittagong
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400" />
                <a
                  href="tel:+8801974896998"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +8801974-896998
                </a>
              </div>
            </div>
          </div>

          {/* Work Hours */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              Work Hours
            </h4>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock
                size={20}
                className="text-yellow-400 flex-shrink-0"
              />
              <div>
                <p className="font-semibold">Sat - Fri :</p>
                <p>03:00 PM - 08:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>Design & Developed By ClickNup</p>
            <p>
              Copyright © 2025 Dr. Chowdhury Farhana Tinnee All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
