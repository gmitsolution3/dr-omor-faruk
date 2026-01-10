import {
  Phone,
  Clock,
  Hospital,
  GraduationCap,
  Stethoscope,
  Brain,
} from "lucide-react";
import DoctorImage from "@/assets/doctorImage.png";

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
              alt="ডাঃ শেখ সারজিনা আনোয়ার"
              className="w-64 h-80 object-cover rounded-2xl shadow"
            />
          </div>

          {/* Basic Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800">
              ডাঃ এস. কে. সারজিনা আনোয়ার
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Dr. SK. Serjina Anwar
            </p>

            <p className="mt-3 text-primary font-medium">
              শিশু রোগ বিশেষজ্ঞ ও শিশু নিউরোলজিস্ট
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Hospital className="w-5 h-5 text-primary" />
                <span>
                  সহকারী অধ্যাপক, কুর্মিটোলা জেনারেল হাসপাতাল, ঢাকা
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Hospital className="w-5 h-5 text-primary" />
                <span>কনসালট্যান্ট, ইয়র্ক হাসপাতাল</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+৮৮০ ১৩৩৯-৫১১১০৮</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>পি.টি. অ্যাপয়েন্টমেন্ট সময়: সকাল ১১টা – রাত ১১টা</span>
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
            ডাঃ শেখ সারজিনা আনোয়ার একজন অভিজ্ঞ শিশু রোগ বিশেষজ্ঞ ও
            শিশু নিউরোলজিস্ট। তিনি শিশুদের জটিল স্নায়বিক ও
            নিউরোডেভেলপমেন্টাল সমস্যার নির্ভুল নির্ণয় ও চিকিৎসায়
            বিশেষভাবে দক্ষ। নবজাতক থেকে শুরু করে শিশু ও কিশোরদের জন্য
            তিনি আধুনিক, প্রমাণভিত্তিক এবং পরিবারকেন্দ্রিক চিকিৎসা
            সেবা প্রদান করে থাকেন।
          </p>
        </div>

        {/* Qualifications */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            শিক্ষাগত যোগ্যতা
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>এমবিবিএস – COMC</li>
            <li>বিসিএস (স্বাস্থ্য)</li>
            <li>
              ডিসিএইচ (শিশু স্বাস্থ্য) – বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয়
              (প্রাক্তন পিজি হাসপাতাল)
            </li>
            <li>
              এফসিপিএস (পেডিয়াট্রিকস) – বাংলাদেশ কলেজ অব ফিজিশিয়ানস
              অ্যান্ড সার্জনস (BCPS)
            </li>
            <li>
              এমডি (শিশু নিউরোলজি ও নিউরোডেভেলপমেন্ট) – বাংলাদেশ মেডিকেল
              বিশ্ববিদ্যালয়
            </li>
          </ul>
        </div>

        {/* Special Training */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            বিশেষ প্রশিক্ষণ
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>নিউরোফিজিওলজি (ইইজি / EEG)</li>
            <li>মৃগী রোগের নির্ণয় ও দীর্ঘমেয়াদি চিকিৎসা</li>
            <li>নিউরো ইনফেকশন ও প্রদাহজনিত স্নায়ুরোগ</li>
            <li>
              অটিজম, এডিএইচডি, সেরিব্রাল পালসি ও অন্যান্য
              নিউরোডেভেলপমেন্টাল সমস্যা
            </li>
            <li>মুভমেন্ট ডিসঅর্ডার ও নিউরোমেটাবলিক রোগ</li>
            <li>জন্মগত ও সিনড্রোমিক স্নায়বিক রোগ</li>
          </ul>
        </div>

        {/* Services */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">
            চিকিৎসা সেবা ও বিশেষ দক্ষতা
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <ul className="list-disc pl-6 space-y-2">
              <li>মৃগী ও খিঁচুনি রোগ</li>
              <li>অটিজম স্পেকট্রাম ডিজঅর্ডার</li>
              <li>এডিএইচডি ও বিকাশজনিত বিলম্ব</li>
              <li>সেরিব্রাল পালসি ব্যবস্থাপনা</li>
              <li>শিশুদের মাথাব্যথা ও মাইগ্রেন</li>
              <li>নিউরোজেনেটিক ও মেটাবলিক রোগ</li>
            </ul>

            <ul className="list-disc pl-6 space-y-2">
              <li>নিউরোমাসকুলার রোগ (SMA, মাসকুলার ডিস্ট্রফি)</li>
              <li>নবজাতকের স্নায়ুরোগ (HIE, নবজাতক খিঁচুনি)</li>
              <li>মুভমেন্ট ডিসঅর্ডার (টিকস, ডিস্টোনিয়া, এটাক্সিয়া)</li>
              <li>ইইজি ও ভিডিও ইইজি বিশ্লেষণ</li>
              <li>ডেভেলপমেন্টাল রিগ্রেশন মূল্যায়ন</li>
              <li>মাল্টিডিসিপ্লিনারি রিহ্যাবিলিটেশন পরিকল্পনা</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 bg-primary text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            অ্যাপয়েন্টমেন্ট বুক করুন
          </h3>
          <p className="mb-4">
            আপনার সন্তানের স্নায়বিক ও বিকাশজনিত সমস্যার জন্য
            নির্ভরযোগ্য ও বিশেষায়িত চিকিৎসা সেবা।
          </p>
          <p className="font-semibold text-lg">
            📞 +৮৮০ ১৩৩৯-৫১১১০৮
          </p>
        </div>
      </div>
    </section>
  );
}
