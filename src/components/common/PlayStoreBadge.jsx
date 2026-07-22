import React from "react";
import Link from "next/link";
import PlayStoreIcon from "@/src/assets/icons/Playstore.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.th.garagesaarthi&hl=en_IN";

/**
 * PlayStoreBadge — Reusable Google Play Store download badge.
 * Uses the official Playstore.png icon asset.
 * @param {string} className — Extra classes on the outer Link wrapper.
 */
export default function PlayStoreBadge({ className = "" }) {
  return (
    <Link
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full transition-all hover:-translate-y-1 active:scale-95 h-[46px] whitespace-nowrap flex-shrink-0 ${className}`}
    >
      <div className="p-0.5 flex-shrink-0">
        <img
          src={PlayStoreIcon}
          alt="Download GarageSaarthi on Google Play Store"
          className="w-6 h-6 object-contain"
        />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-normal opacity-70 whitespace-nowrap">Download on the</span>
        <span className="text-xs font-semibold mt-0.5 whitespace-nowrap">Play Store</span>
      </div>
    </Link>
  );
}
