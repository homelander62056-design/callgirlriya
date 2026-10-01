"use client";

import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import PhoneIcon from "./PhoneIcon";
import { trackWhatsAppClick, trackCallClick } from "../utils/trackWhatsapp";

export default function FloatingWhatsApp() {
  const rawNumber = "8294107610";
  const formattedPhone = `+91 ${rawNumber.slice(0, 5)} ${rawNumber.slice(5)}`;
  const whatsappUrl = `https://wa.me/91${rawNumber}?text=${encodeURIComponent(
    "Hi Riya Escorts Hyderabad, I am interested in booking a verified companion. Please share details."
  )}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({
      name: "Floating WhatsApp Widget",
      city: "Hyderabad",
      whatsappNumber: `+91${rawNumber}`,
    });
  };

  const handleCallClick = () => {
    trackCallClick({
      name: "Floating Call Widget",
      city: "Hyderabad",
      number: `+91${rawNumber}`,
    });
  };

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 font-sans">

      {/* 1. Direct Call Floating Button */}
      <div className="flex items-center gap-2 group">
        <a
          href={`tel:+91${rawNumber}`}
          onClick={handleCallClick}
          aria-label={`Call ${formattedPhone}`}
          className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-tr from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white rounded-full shadow-xl sm:shadow-2xl shadow-rose-600/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Subtle Ping Radar wave for Call */}
          <span className="absolute -inset-1 rounded-full bg-rose-500 opacity-25 animate-ping pointer-events-none"></span>

          {/* Call Icon */}
          <PhoneIcon className="w-5 h-5 sm:w-6.5 sm:h-6.5 fill-current relative z-10" size={22} />

          {/* Online Indicator Dot */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-rose-300 border-[1.5px] sm:border-2 border-white rounded-full z-20"></span>
        </a>
      </div>

      {/* 2. WhatsApp Floating Button */}
      <div className="flex items-center gap-2 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl sm:shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Radar wave animation */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

          {/* WhatsApp Icon */}
          <WhatsAppIcon className="w-5.5 h-5.5 sm:w-7 sm:h-7 fill-current relative z-10" size={22} />

          {/* Online Green Indicator Dot */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-[1.5px] sm:border-2 border-white rounded-full z-20"></span>
        </a>
      </div>

    </div>
  );
}
