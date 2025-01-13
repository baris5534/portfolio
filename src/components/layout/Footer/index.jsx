import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 w-full">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <span className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                @Barış-Yıldız
              </span>
              <div className="flex items-center">
                <HiOutlineLocationMarker className="w-[18px] h-[18px] text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm ml-2">İstanbul/Türkiye</span>
              </div>
              <span className="text-gray-400 text-sm">
                Frontend Developer
              </span>
            </div>
            <div className="flex items-center">
              <BiCopyright className="w-[14px] h-[14px] text-gray-500 flex-shrink-0" />
              <span className="text-gray-500 text-xs ml-1">
                2024 Barış Yıldız - Tüm Hakları Saklıdır
              </span>
            </div>
          </div>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
} 