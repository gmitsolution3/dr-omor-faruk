import { useState } from "react";

export default function AppointmentBook() {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    serviceLocation: "",
    address: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-[#423D96] flex items-center justify-center px-4 py-[150px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              অ্যাপয়েন্টমেন্ট বুক করুন
            </h3>

            <div className="space-y-4 text-lg">
              <p>
                আপনি তুক, এনাজি, যৌনশক্তি বা সৌন্দর্যের মত নিয়ে
                চিন্তিত?
              </p>

              <p>
                একজিমা স্কিন, এলাজি, সেক্স, অ্যাথেটিক মেডিসিন
                স্পেশালিস্ট ও ডায়েটেশিয়ান আপনার জন্য সঠিক সমাধান হতে
                পারেন।
              </p>

              <p>
                ডাঃ তৌহিদী ফারহানা ভিন্তি বাংলাদেশের একজন প্রথ্যাত
                চর্মরোগ, এলাজি, যৌন স্বাথ্য, অ্যাথেটিক মেডিসিন
                বিশেষজ্ঞ এবং ডায়েটেশিয়ান।
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="customerName"
                    placeholder="আপনার নাম"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="ফোন নাম্বার"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <select
                    name="serviceLocation"
                    value={formData.serviceLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent text-gray-700"
                  >
                    <option value="">সিলেক্ট লোকেশন</option>
                    <option value="dhaka">ঢাকা</option>
                    <option value="chittagong">চট্টগ্রাম</option>
                    <option value="sylhet">সিলেট</option>
                    <option value="rajshahi">রাজশাহী</option>
                    <option value="khulna">খুলনা</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="ঠিকানা"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#4285f4] text-white rounded-t-2xl py-3 px-6 hover:bg-[#10172E] transition-colors flex items-center gap-2"
                >
                  সাবমিট করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
