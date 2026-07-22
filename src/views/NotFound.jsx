'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../components/common/Button";
import ErrorSvg from "../assets/icons/error.svg";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full">
        <img
          src={ErrorSvg}
          alt="404 Error"
          className="w-64 md:w-80 mx-auto mb-4"
        />
        <h2 className="text-3xl font-semibold text-gray-900 mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-10">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button
          variant="hero"
          className="mx-auto flex items-center gap-2"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
