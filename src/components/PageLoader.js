// components/PageLoader.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PageLoader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.pathname) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      setLoading(false);
    };

    const events = [
      "routeChangeStart",
      "routeChangeComplete",
      "routeChangeError",
    ];
    events.forEach((event) => {
      router.events.on(event, handleStart);
      router.events.on(event, handleComplete);
    });

    return () => {
      events.forEach((event) => {
        router.events.off(event, handleStart);
        router.events.off(event, handleComplete);
      });
    };
  }, [router.events]); // Ensure useEffect dependency

  return (
    loading && (
      <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="spinner"></div>
        <style jsx>{`
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #4299e1;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  );
};

export default PageLoader;
