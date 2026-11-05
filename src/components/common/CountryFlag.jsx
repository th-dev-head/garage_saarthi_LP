import React from "react";

export default function CountryFlag({ code, name = "", className = "w-5 h-3.5" }) {
  if (!code) return null;
  const c = code.toLowerCase();

  return (
    <img
      src={`/flags/${c}.svg`}
      alt={name || `${code} flag`}
      className={`inline-block object-cover rounded-xs shadow-xs border border-slate-200/60 shrink-0 ${className}`}
      loading="lazy"
      width={24}
      height={16}
    />
  );
}

