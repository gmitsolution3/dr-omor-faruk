import { Menu, Phone, Clock, Hospital, Brain } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sideMenuData } from "@/data/sidemenu.data";
import DoctorImage from "@/assets/doctorImage.png";

export default function HeaderSideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent className="bg-[#10172E] text-white border-l-0 overflow-y-auto">
        <SheetHeader>
          {/* Doctor Profile */}
          <div className="flex flex-col items-center text-center mt-8">
            <img
              src={DoctorImage}
              alt={sideMenuData.doctor.name}
              className="w-28 h-36 object-cover rounded-xl shadow mb-4"
            />

            <SheetTitle className="text-white text-2xl">
              {sideMenuData.doctor.name}
            </SheetTitle>

            <p className="mt-2 text-sm font-light text-gray-300">
              {sideMenuData.doctor.title}
            </p>
          </div>

          <SheetDescription>
            <div className="space-y-6 mt-8">
              {/* Centers */}
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Hospital className="w-4 h-4 text-primary" />
                  চেম্বার / হাসপাতাল
                </h3>

                <div className="space-y-3">
                  {sideMenuData.centers.map((center, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-sm">
                        {center.name}
                      </p>
                      <p className="text-xs text-gray-300">
                        {center.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  যোগাযোগ
                </h3>

                <div className="text-sm text-gray-300 flex flex-col gap-1">
                  {sideMenuData.phone.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              {/* Timing */}
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  চেম্বার সময়
                </h3>

                <p className="text-sm text-gray-300">
                  {sideMenuData.timing}
                </p>
              </div>

              {/* Appointment */}
              <div>
                <h3 className="font-semibold text-white mb-3">
                  🕐 অ্যাপয়েন্টমেন্ট সময়
                </h3>
                <p className="text-sm text-gray-300">
                  {sideMenuData.appointment}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  বিশেষ দক্ষতা
                </h3>

                <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                  {sideMenuData.specialties.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-center text-sm text-gray-300 mb-2">
                  অ্যাপয়েন্টমেন্টের জন্য কল করুন
                </p>
                <p className="text-center font-semibold text-lg text-white">
                  {sideMenuData.phone[0]}
                </p>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
