import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sideMenuData } from "@/data/sidemenu.data";

export default function HeaderSideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-[#10172E] text-white border-l-0">
        <SheetHeader>
          <SheetTitle className="text-white text-3xl mt-12">
            {sideMenuData.doctor.name}
            <p className="mt-5 text-lg font-light">
              {sideMenuData.doctor.title}
            </p>
          </SheetTitle>

          <SheetDescription>
            <div className="space-y-4 mt-4">
              {/* Centers */}
              {sideMenuData.centers.map((center, idx) => (
                <div key={idx}>
                  <h3 className="font-bold mb-2 text-white">
                    {center.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {center.address}
                  </p>
                </div>
              ))}

              {/* Phone */}
              <div>
                <h3 className="font-bold text-white mb-2">ফোন</h3>
                <p className="text-sm text-gray-300">
                  {sideMenuData.phone}
                </p>
              </div>

              {/* Timing */}
              <div>
                <h3 className="font-bold text-white mb-2">সময়</h3>
                <p className="text-sm text-gray-300">
                  {sideMenuData.timing}
                </p>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
