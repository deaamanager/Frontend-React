"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    //console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`my-10 z-50 mx-auto max-w-[25rem] md:max-w-screen-md
      ${cookieConsent != null ? "hidden" : "flex"}
                        fixed bottom-24 left-0 right-0 h-[45%]
                          flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-[#111]/90 rounded-lg shadow`}
    >
      <div className="mt-10 ">
        <p className=" flex flex-col items-start justify-center space-y-8 h-full w-full">
          <span className="text-amber-500 pl-10 text-2xl animate-pulse ">
            Cookies for Analysis :
          </span>
          <span className="text-gray-300 px-2 md:px-5">
            I use cookies to analyze website traffic and improve your browsing
            experience. By continuing to use this website, you consent to the
            use of cookies for analytical purposes. For more information, please
            read our{" "}
            <span className="text-blue-300 underline">Privacy Policy</span> .
          </span>
        </p>
      </div>

      <div className="flex gap-2 mb-8 md:mb-0">
        <button
          onClick={() => setCookieConsent(true)}
          className="px-5 py-2 text-gray-300 rounded-lg bg-gray-900   border-gray-200"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg "
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
