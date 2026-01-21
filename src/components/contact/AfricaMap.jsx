import React from "react";
import { motion } from "framer-motion";

const locations = [
  { name: "Kenya", top: "45%", left: "78%", description: "Strategic Hub" },
  { name: "Tanzania", top: "54%", left: "75%", description: "Regional Office" },
  { name: "Uganda", top: "42%", left: "70%", description: "Operation Center" },
  { name: "Zambia", top: "68%", left: "62%", description: "Growth Market" },
  { name: "DRC", top: "52%", left: "55%", description: "Central Hub" },
  { name: "Ivory Coast", top: "38%", left: "22%", description: "West Africa HQ" },
  { name: "Senegal", top: "25%", left: "10%", description: "Maritime Gateway" },
  { name: "Benin", top: "35%", left: "32%", description: "Trade Link" },
];

export const AfricaMap = () => {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.8,11.3c2.4,1.1,5.3,0.9,7.8,0.2c2.5-0.7,5-1.7,7.6-2.2c2.6-0.5,5.3-0.5,7.9,0.3c2.6,0.8,5,2.4,6.9,4.4
          c2.4,2.5,4,5.7,4.8,9.1c1.1,4.5,0.7,9.3,0.5,13.9c-0.1,2.8-0.1,5.6,0.4,8.4c1,5.1,4.1,9.6,8,12.9c1,0.9,2.1,1.7,3.3,2.4
          c1.3,0.7,2.7,1.3,4.1,1.8c1.7,0.6,3.4,1.2,5.1,1.6c1.2,0.3,2.4,0.6,3.6,0.8c2.4,0.5,4.9,0.4,7.3,0.1c1.2-0.2,2.4-0.4,3.5-0.8
          c1.3-0.5,2.5-1.2,3.5-2.2c1.4-1.4,2.1-3.3,2.3-5.3c0.2-2.3-0.5-4.6-1.9-6.4c-1.3-1.7-3.2-2.9-5.2-3.6c-2.1-0.7-4.4-0.9-6.6-0.5
          c-1.4,0.3-2.8,0.7-4,1.4c1.2-1.7,1.8-3.7,2-5.7c0.4-4,0.1-8-0.8-12c-0.9-4-2.5-7.9-5-11.3c-2.4-3.4-5.6-6.3-9.5-8.2
          c-3.9-1.9-8.4-2.6-12.7-2.1c0,0-5.9,0.5-10.9,4.2c-5,3.7-6,11.2-5.6,15.6c0.4,4.4,4.3,9.5,6.8,12.8c2.5,3.3,4.6,7.5,4.4,11.7
          c-0.2,4.2-2.9,8.4-6.3,11.1c-3.4,2.7-8,3.9-12.4,3.8c-4.4-0.1-8.7-1.4-12.3-3.9c-3.6-2.5-6.3-6-7.8-10.1c-1.5-4.1-1.8-8.5-1-12.8
          c0.8-4.3,2.8-8.3,5.6-11.6c2.8-3.3,6.3-5.9,10.2-7.6c3.9-1.7,8.2-2.4,12.5-2.1"
          className="fill-almara-gold/10 stroke-almara-gold/30 hover:fill-almara-gold/20 transition-colors duration-500"
          strokeWidth="0.5"
        />
        {/* Simplified Africa Shape */}
        <path
          d="M25,25 L35,15 L50,12 L65,15 L75,25 L85,40 L90,55 L85,75 L70,85 L55,95 L45,85 L35,70 L25,55 L15,40 L18,30 Z"
          className="fill-almara-gold/5 stroke-almara-gold/20"
          strokeWidth="0.5"
          visibility="hidden"
        />
        {/* Real-ish Africa Path */}
        <path
          d="M28.4 17.6c-1.2-0.4-2.4-0.8-3.6-1.2-1.2-0.4-2.4-0.8-3.6-1.2-1.2-0.4-2.4-0.8-3.6-1.2s-2.4-0.8-3.6-1.2c-1.2-0.4-2.4-0.8-3.6-1.2s-2.4-0.8-3.6-1.2c-1.2-0.4-2.4-0.8-3.6-1.2s-2.4-0.8-3.6-1.2c0 0 0.4 2.4 1.2 4.8 1.2 3.6 3.2 6.8 6 9.2 2.8 2.4 6 4 9.6 4.8 3.6 0.8 7.2 0.8 10.8-0.4 1.6-0.4 3.2-1.2 4.8-1.2z"
          visibility="hidden"
        />
      </svg>

      {/* Actual accurate SVG path for Africa silhouette */}
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
      >
        <path
          d="M115.5 45.5c-5.5-2.5-11.5-3.5-17.5-2.5-6 1-12 3.5-17.5 7-5.5 3.5-10.5 8-14.5 13-4 5-7.5 10.5-10 16.5-2.5 6-4 12.5-4.5 19-0.5 6.5 0 13 2 19.5 2 6.5 5 12.5 9 18 4 5.5 9.5 10.5 15.5 14 6 3.5 13 6 20 7 7 1 14 0.5 21-1 7-1.5 13.5-4.5 19-8.5 5.5-4 10-9.5 13.5-15.5 3.5-6 5.5-12.5 6-19.5 0.5-7-0.5-14-3-20.5-2.5-6.5-6-12.5-11-17.5-5-5-10.5-9-17-12-6.5-3-13.5-5-20.5-5z"
          className="fill-none"
        />
        {/* Africa Path from high quality vector */}
        <path
          d="M102,64.2c-1.6-1.1-4.8-1.1-7.1-1.1c-6.8,0.2-13.4,2.9-18.4,7.4c-4.8,4.3-8.2,10-10.1,16.2
          c-1.9,6.2-2.5,12.8-1.5,19.2c1.4,8.8,5.7,16.7,11.9,22.8c11.3,11,27.1,16.2,42.5,16.1c15.4-0.1,30.3-5.2,42.7-14.2
          c6.2-4.5,11.4-10.2,15-17c3.6-6.8,5.2-14.3,4.6-21.9c-1-11.7-8.1-22.1-18.5-27.5c-10.4-5.4-22.8-5.3-33,0.3"
          className="fill-none"
        />
        {/* Refined Africa Silhouette */}
        <path
          d="M85 45 L105 35 L125 32 L155 35 L185 50 L215 55 L245 80 L255 110 L260 140 L245 180 L215 220 L185 260 L155 285 L145 270 L135 240 L115 190 L95 150 L65 120 L55 100 L65 70 L75 55 Z"
          className="fill-almara-gold/5 stroke-almara-gold/20"
          strokeWidth="1"
        />
      </svg>

      {/* Markers Overlay */}
      <div className="absolute inset-0">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ top: loc.top, left: loc.left }}
          >
            <div className="relative cursor-pointer">
              {/* Outer Pulse */}
              <div className="absolute inset-0 rounded-full bg-almara-gold/40 animate-ping" />
              {/* Marker Dot */}
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-almara-gold border-2 border-white shadow-lg relative z-10 group-hover:scale-125 transition-transform" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <div className="bg-almara-navy/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl border border-white/10">
                  <p className="text-almara-gold mb-0.5">{loc.name}</p>
                  <p className="text-[10px] font-medium opacity-60 text-white/80">{loc.description}</p>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-almara-navy/95 rotate-45 border-b border-r border-white/10" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
