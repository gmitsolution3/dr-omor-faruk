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
                  নিউজলেটার সাবস্ক্রাইব করুন
                </h3>
                <p className="text-gray-400 max-w-100">
                  শিশু ও পেডিয়াট্রিক সচেতনতামূলক বিভিন্ন বিষয় নিয়ে
                  আর্টিকেল পাবলিশ করা হবে।
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
                className="flex-1 md:w-80 px-6 py-4 rounded-l-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary transition-colors px-8 py-4 rounded-r-xl font-semibold whitespace-nowrap"
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
          {/* About Dr. Serjina Anwar */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              About Dr. Serjina Anwar
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>Dr. SK. Serjina Anwar</p>
              <p>MBBS (COMC), BCS (Health)</p>
              <p>
                DCH (Bangladesh Medical University, Ex-PG Hospital)
              </p>
              <p>FCPS (Paediatrics, BCPS)</p>
              <p>
                MD (Paediatric Neurology & Development, Bangladesh
                Medical University)
              </p>
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
                href="#about"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ChevronRight size={16} />
                About Us
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <ChevronRight size={16} />
                Services
              </a>
              <a
                href="#contact"
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
                  Kurmitola General Hospital, Dhaka <br />
                  York Hospital Chamber (Sat-Wed, 5:00 PM - 8:30 PM)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400" />
                <a
                  href="tel:+8801339511108"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +880 1339-511108
                </a>
              </div>
            </div>
          </div>

          {/* Work Hours */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 text-xl font-bold mb-4">
              PT Appointment Hours
            </h4>
            <div className="flex items-center gap-3 text-gray-300">
              <Clock
                size={20}
                className="text-yellow-400 flex-shrink-0"
              />
              <div>
                <p className="font-semibold">PT Appointments:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>Design & Developed By GM IT</p>
            <p>
              Copyright © {new Date().getFullYear()} Dr. SK. Serjina
              Anwar All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
