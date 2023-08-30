/**
 * Title: Write a program using JavaScript on Unauthorized
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 29, July 2023
 */

import Meta from "@/components/shared/meta";
import Link from "next/link";
import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen bg-primary/10">
      <Meta title={"Unauthorized"} />
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-800 mb-4">
        401 - Unauthorized Page
      </h1>
      <p className="text-gray-600 mb-8">
        You don&apos;t have permission to access this page.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-secondary text-black hover:bg-primary hover:text-white rounded-3xl"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default UnauthorizedPage;
