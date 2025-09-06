import { memo } from 'react';
import Links from "../../links";

// SVG Icon Components
const LocationIcon = () => (
  <svg className="w-[18px] h-[18px] text-blue-400/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CopyrightIcon = () => (
  <svg className="w-[14px] h-[14px] text-gray-500/80 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

function Footer() {
  return (
    <footer className=" w-full" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h2 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                @Barış-Yıldız
              </h2>
              <address className="flex items-center not-italic">
                <LocationIcon />
                <span className="text-gray-400/80 text-sm ml-2 mt-1.5">İstanbul/Türkiye</span>
              </address>
              <p className="text-gray-400/80 text-sm">
                Frontend Developer
              </p>
            </div>
            <div className="flex items-center">
              <CopyrightIcon />
              <small className="text-gray-500/80 text-xs ml-1 pt-1">
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