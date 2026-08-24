import React from "react";
import Link from "next/link";
import AppleIcon from "@/src/assets/icons/Apple.webp";

const APP_STORE_URL =
  "https://apps.apple.com/in/app/garagesaarthi-garage-software/id6760575656";

/**
 * AppStoreBadge — Reusable Apple App Store download badge.
 * Uses the Apple.webp icon asset.
 * @param {string} className — Extra classes on the outer Link wrapper.
 */
export default function AppStoreBadge({ className = "" }) {
  return (
    <Link
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-full transition-all hover:-translate-y-1 active:scale-95 h-[46px] whitespace-nowrap flex-shrink-0 ${className}`}
    >
      <div className="p-0.5 flex-shrink-0">
        <img
          src={AppleIcon.src || AppleIcon}
          alt="Download GarageSaarthi on Apple App Store"
          className="w-6 h-6 object-contain"
          loading="lazy"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-normal opacity-70 whitespace-nowrap">Download on the</span>
        <span className="text-xs font-semibold mt-0.5 whitespace-nowrap">App Store</span>
      </div>
    </Link>
  );
}
