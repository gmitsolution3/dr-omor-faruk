import {
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
  return (
    <footer className="bg-[#10172E] text-white">
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
                <div className="flex flex-col">
                  <a
                    href="tel:+8801339511108"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    +8801339511108
                  </a>
                  <a
                    href="tel:+8801992222555"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    +8801992222555
                  </a>
                  <a
                    href="tel:+8801992222777"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    +8801992222777
                  </a>
                </div>
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
            <div className="flex items-center gap-3 text-gray-300">
              <Clock
                size={20}
                className="text-yellow-400 flex-shrink-0"
              />
              <div>
                <p className="font-semibold">PT Service Time:</p>
                <p>7 AM - 9 PM</p>
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
