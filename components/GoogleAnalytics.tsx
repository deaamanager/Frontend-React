"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/gtagHelper";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  useEffect(() => {
    const url = pathname + (searchParams?.toString() || "");

    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id="gtm-scrip"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 
              gtag('config', '${GTM_ID}', {
                  page_path: window.location.pathname,
              });
              `,
        }}
      />
    </>
  );
}
