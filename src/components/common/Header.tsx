import { Link } from "react-router";
import { MapPin, Phone } from "lucide-react";

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
                পাঁচলাইশ, প্রবর্তক মোড়, চট্টগ্রাম
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 border-r border-[#EAEAEA] pe-5">
            <span className="bg-[#6C234C] text-white p-4 rounded-t-2xl">
              <Phone />
            </span>
            <div>
              <h3 className="font-medium">সিরিয়ালের জন্য</h3>
              <p className="text-[#525766]">0123456789</p>
            </div>
          </div>

          <div className="bg-[#6C234C] text-white rounded-t-2xl py-3 px-4">
            <p>অ্যাপয়েন্টমেন্ট বুক করুন</p>
          </div>
        </div>
      </div>
    </header>
  );
}
