import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import FuzzyText from "@/components/FuzzyText";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="mx-6">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
        >
          404
        </FuzzyText>
      </h1>
      <h2 className="text-3xl font-semibold mb-4 ">
      <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize="clamp(1rem, 5vw, 5rem)"
        >
          Page Not Found
        </FuzzyText>
        </h2>
      <p className="text-gray-600 mb-8">
        The page you’re looking for doesn’t exist or may have been moved. Please
        check the URL or return to the homepage.
      </p>
      <Link href={"/"}>
        <Button variant={"finGenie"}>Return To Home Page</Button>
      </Link>
    </div>
  );
};

export default NotFound;
