import { ArrowRight } from "lucide-react";
import TreatmentImage from "@/assets/treatment.jpg";
import FacialImage from "@/assets/facial.jpg";
import MakeupImage from "@/assets/makeup.jpg";

export default function BlogSection() {
  const articles = [
    {
      image: TreatmentImage,
      title:
        "গোয়াইড ও ব্লাইট ফিলার জন্য কোনগুলো পিলিং কাটিং কার্যকর?",
      excerpt:
        "উজ্জ্বল মসৃণ ও দাগহীন ত্বক সবারই কম্য। তবে বয়স, দুষণ, সান ড্যামেজ, বুণ ও পিগমেন্টেশনের কারণে আমাদের ত্বক হারায় তার...",
      link: "#",
    },
    {
      image: FacialImage,
      title: "বোটক্স ট্রিটমেন্ট চেহারায় তরুণ্য ফিরিয়ে আনুন",
      excerpt:
        "বোটক্স ট্রিটমেন্ট: চেহারায় তরুণ্য ফিরিয়ে আনুন বুষ বাড়ার সঙ্গে সঙ্গে ত্বকে দেখা দেয় বলিরেখা। চেহারের কোশে কোশে হাঁসি কামারের ছাঁচ—যা আমাদের চেহারাকে করে তোলে ক্লান্ত, যঞ্জণাকৃত...",
      link: "#",
    },
    {
      image: MakeupImage,
      title: "তিল বা আচিল থেকে মুক্তি চান?",
      excerpt:
        "তিল বা আচিল থেকে মুক্তি চান? ত্বকে থাকা তিল বা আচিল আমাদের অনেকেরই সাহারণ সমস্যা। কেউ কেউ এটিকে সৌন্দর্যের অংশ হিসেবে মেনে নেন, আবার অনেকেই কেটেই...",
      link: "#",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            লেটেস্ট ব্লগ এবং টিপস
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            তুক, এলাজি, যৌন স্বাথ্য বিষয়ক বিভিন্ন রোগ এবং তার
            প্রতিকার ও সতর্কতামূলক মূলক নানা রকম বিষয় নিয়ে আর্টিকেল
            পাবিকেল করা হবে।
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug hover:text-[#8B4F7C] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#8B4F7C] font-semibold text-sm sm:text-base hover:gap-3 transition-all"
                >
                  বিস্তারিত{" "}
                  <span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
