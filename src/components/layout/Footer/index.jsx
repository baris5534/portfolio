import { memo } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import Links from "../../links";

function Footer() {
  return (
    <footer className="border-t border-gray-800/20 bg-gradient-to-b from-black/50 via-black/50 to-black/50 md:from-transparent md:via-gray-900/30 md:to-black/50 backdrop-blur-sm w-full" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h2 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                @Barış-Yıldız
              </h2>
              <address className="flex items-center not-italic">
                <HiOutlineLocationMarker className="w-[18px] h-[18px] text-blue-400/80 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-400/80 text-sm ml-2">İstanbul/Türkiye</span>
              </address>
              <p className="text-gray-400/80 text-sm">
                Frontend Developer
              </p>
            </div>
            <div className="flex items-center">
              <BiCopyright className="w-[14px] h-[14px] text-gray-500/80 flex-shrink-0" aria-hidden="true" />
              <small className="text-gray-500/80 text-xs ml-1">
                2024 Barış Yıldız - Tüm Hakları Saklıdır
              </small>
            </div>
          </div>

          <nav className="flex flex-col items-center space-y-4" aria-label="Sosyal medya bağlantıları">
            <h3 className="text-sm font-medium text-gray-400/80">
              Beni Takip Edebilirsiniz
            </h3>
            <div className="p-2">
              <Links/>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer); 