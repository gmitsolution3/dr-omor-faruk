export const appointmentData = {
  heading: "অ্যাপয়েন্টমেন্ট বুক করুন",
  description: [
    "আপনি নিউমোনিয়া, এজমা, টাইফয়েড, ডেংগু, সহ পেডিয়াট্রিক নিউরোলজি সমস্যা নিয়ে চিন্তিত?",
    "ডাঃ শেখ সারজিনা আনোয়ার বাংলাদেশের একজন প্রথ্যাত শিশু বিশেষজ্ঞ এবং পেডিয়েট্রিক নিউরলজি বিশেষজ্ঞ আছেন আপনার সমাধানে।",
  ],
  formFields: [
    {
      type: "text",
      name: "name",
      placeholder: "আপনার নাম",
    },
    {
      type: "tel",
      name: "phoneNumber",
      placeholder: "ফোন নাম্বার",
    },
    {
      type: "select",
      name: "location",
      placeholder: "সিলেক্ট লোকেশন",
      options: [
        { value: "", label: "সিলেক্ট লোকেশন" },
        { value: "dhaka", label: "ঢাকা" },
        { value: "chittagong", label: "চট্টগ্রাম" },
        { value: "sylhet", label: "সিলেট" },
        { value: "rajshahi", label: "রাজশাহী" },
        { value: "khulna", label: "খুলনা" },
      ],
    },
    {
      type: "text",
      name: "address",
      placeholder: "ঠিকানা",
    },
  ],
  button: {
    text: "সাবমিট করুন",
    variant: "primary",
    className: "bg-[#4285f4] hover:bg-[#10172E]",
  },
  bgColor: "#423D96",
};