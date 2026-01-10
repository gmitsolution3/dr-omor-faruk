import { useState } from "react";
import type { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { getPreFilledForm } from "@/utils/generatePreFilledForm";
import { appointmentData } from "@/data/appointBooking.data";
import type { TButton } from "@/type";

interface IFormData {
  name: string;
  phoneNumber: string;
  location: string;
  address: string;
}

export default function AppointmentBook() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phoneNumber: "",
    location: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formLink = getPreFilledForm(formData);
    window.open(formLink, "_blank");
  };

  return (
    <div
    id="book-appointment"
      className={`bg-[${appointmentData.bgColor}] flex items-center justify-center px-4 py-12 md:py-20 lg:py-[150px]`}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white space-y-4 lg:space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
              {appointmentData.heading}
            </h3>

            <div className="space-y-3 lg:space-y-4 text-base font-light md:text-lg">
              {appointmentData.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appointmentData.formFields
                  .slice(0, 2)
                  .map((field, idx) => (
                    <div key={idx}>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={
                            formData[field.name as keyof IFormData]
                          }
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent text-gray-700 text-sm md:text-base"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={
                            formData[field.name as keyof IFormData]
                          }
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent text-sm md:text-base"
                        />
                      )}
                    </div>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appointmentData.formFields
                  .slice(2)
                  .map((field, idx) => (
                    <div key={idx}>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={
                            formData[field.name as keyof IFormData]
                          }
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent text-gray-700 text-sm md:text-base"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={
                            formData[field.name as keyof IFormData]
                          }
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent text-sm md:text-base"
                        />
                      )}
                    </div>
                  ))}
              </div>

              <div className="flex justify-center pt-2 md:pt-4">
                <Button
                  variant={appointmentData.button.variant as TButton}
                  className={appointmentData.button.className}
                >
                  {appointmentData.button.text}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
