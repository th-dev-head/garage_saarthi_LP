import React from "react";

/**
 * Wraps children text with a gradient underline bar (orange → red).
 * Usage:
 *   <h2>Connect Your Garage Operations with{" "}
 *     <GradientUnderline>One ERP System</GradientUnderline>
 *   </h2>
 */
export default function GradientUnderline({ children }) {
  return (
    <span className="relative inline bg-no-repeat bg-bottom bg-[length:100%_3px] bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)] pb-1">
      {children}
    </span>
  );
}
