import {
  Phone,
  Clock,
  Hospital,
  GraduationCap,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import DoctorImage from "@/assets/dr-omor-faruk.jpg";

export default function DoctorProfile() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl shadow-md p-8">
          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src={DoctorImage}
              alt="ডাঃ মোঃ ওমর ফারুক"
              className="w-64 h-80 object-cover rounded-2xl shadow"
            />
          </div>

          {/* Basic Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800">
              ডাঃ মোঃ ওমর ফারুক
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Dr. Md. Omor Faruk
            </p>

            <p className="mt-3 text-primary font-medium">
              স্কিন, এলার্জি, সেক্স ও অ্যাস্থেটিক মেডিসিন স্পেশালিস্ট
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Hospital className="w-5 h-5 text-primary" />
                <span>চর্ম ও যৌনরোগ বিশেষজ্ঞ</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div className="text-sm leading-relaxed">
                  <p>
                    <strong>চেম্বারে রোগী দেখার সময়:</strong>
                    <br />
                    প্রতিদিন (চেম্বারভিত্তিক)
                  </p>

                  <p className="mt-2">
                    <strong>অ্যাপয়েন্টমেন্ট সিরিয়াল:</strong>
                    <br />
                    ফোনের মাধ্যমে
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            ডাক্তারের পরিচিতি
          </h2>

          <p className="text-gray-700 leading-relaxed">
            ডাঃ মোঃ ওমর ফারুক একজন অভিজ্ঞ স্কিন, এলার্জি, সেক্স ও
            অ্যাস্থেটিক মেডিসিন স্পেশালিস্ট। তিনি ত্বক, চুল,
            যৌনস্বাস্থ্য ও সৌন্দর্যবর্ধক চিকিৎসায় আধুনিক ও নিরাপদ
            পদ্ধতি প্রয়োগ করে রোগীদের সেবা প্রদান করে থাকেন। লেজার ও
            কসমেটিক ডার্মাটোলজিতে তাঁর বিশেষ দক্ষতা রয়েছে।
          </p>
        </div>

        {/* Qualifications */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            শিক্ষাগত যোগ্যতা
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>এমবিবিএস</li>
            <li>বিসিএস (স্বাস্থ্য)</li>
            <li>এমডি (চর্ম ও যৌনরোগ) – বিএসএমএমইউ</li>
            <li>ফেলোশিপ ইন ডার্মাটোসার্জারি</li>
            <li>অ্যাস্থেটিক মেডিসিনে বিশেষ প্রশিক্ষণ</li>
          </ul>
        </div>

        {/* Special Training */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            বিশেষ প্রশিক্ষণ
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>লেজার থেরাপি ও কসমেটিক ডার্মাটোলজি</li>
            <li>ফেসিয়াল অ্যাস্থেটিক ট্রিটমেন্ট</li>
            <li>ডার্মাটোসার্জারি</li>
            <li>হেয়ার ও স্কিন রিজুভেনেশন</li>
          </ul>
        </div>

        {/* Services */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">
            চিকিৎসা সেবা ও বিশেষ দক্ষতা
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>ফেস পিআরপি (Face PRP)</li>
              <li>হেয়ার পিআরপি (Hair PRP)</li>
              <li>কার্মিকেল পিলিং</li>
              <li>ব্রণ ও দাগের চিকিৎসা</li>
              <li>ত্বকের এলার্জি</li>
            </ul>

            <ul className="list-disc pl-6 space-y-2">
              <li>বোটক্স (Botox)</li>
              <li>ফিলার (Filler)</li>
              <li>লেজার ট্রিটমেন্ট</li>
              <li>ত্বক উজ্জ্বলকরণ চিকিৎসা</li>
              <li>চুল পড়া চিকিৎসা</li>
            </ul>

            <ul className="list-disc pl-6 space-y-2">
              <li>যৌনরোগের চিকিৎসা</li>
              <li>চর্মরোগের দীর্ঘমেয়াদি সমাধান</li>
              <li>ত্বকের সংক্রমণ</li>
              <li>স্কিন ট্যাগ ও আঁচিল অপসারণ</li>
              <li>অ্যাস্থেটিক কনসালটেশন</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 bg-primary text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            অ্যাপয়েন্টমেন্ট বুক করুন
          </h3>
          <p className="mb-4">
            নিরাপদ ও আধুনিক স্কিন এবং অ্যাস্থেটিক চিকিৎসার জন্য আজই
            যোগাযোগ করুন।
          </p>
          <p className="font-semibold text-lg">
            📞 ফোনে অ্যাপয়েন্টমেন্ট
          </p>
        </div>
      </div>
    </section>
  );
}
