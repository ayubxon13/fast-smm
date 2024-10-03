"use client";
import {useEffect} from "react";
import {Loader} from "lucide-react";

export default function Loading() {
  useEffect(() => {
    // Lock the body scroll when the loading component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup function to reset the overflow style when unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-opacity-45 bg-black flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
}
