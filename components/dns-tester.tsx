"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

export function DNSTester() {
  const [status, setStatus] = useState<
    "loading" | "connected" | "not-connected"
  >("loading");

  useEffect(() => {
    const testDNS = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        await fetch("https://test-dns.misc.puredns.org", {
          signal: controller.signal,
          mode: "no-cors",
        });

        clearTimeout(timeoutId);
        setStatus("connected");
      } catch (error) {
        setStatus("not-connected");
      }
    };

    testDNS();
  }, []);

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm">
          {status === "loading" && (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
              <span className="text-gray-600 dark:text-gray-400">
                Checking DNS status...
              </span>
            </>
          )}
          {status === "connected" && (
            <>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-green-600 dark:text-green-400 font-medium">
                You are using PureDNS
              </span>
            </>
          )}
          {status === "not-connected" && (
            <>
              <XCircle className="h-4 w-4 text-orange-500" />
              <span className="text-orange-600 dark:text-orange-400 font-medium">
                You are not using PureDNS
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
