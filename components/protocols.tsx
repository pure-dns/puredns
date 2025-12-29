"use client";
import { Copy, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Protocols() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const primaryProtocol = {
    name: "HTTPS",
    address: "https://dns.puredns.org/dns-query",
    description:
      "Best for most people. Works everywhere and keeps your browsing private.",
  };

  const otherProtocols = [
    {
      name: "TLS",
      address: "tls://dns.puredns.org",
      description: "For advanced users",
    },
    {
      name: "HTTP3",
      address: "h3://dns.puredns.org",
      description: "Forced HTTP/3",
    },
    {
      name: "QUIC",
      address: "quic://dns.puredns.org",
      description: "Faster connection",
    },
    {
      name: "DNSCrypt",
      address:
        "sdns://AgcAAAAAAAAADjE1Ny4xNS4xMjQuMjIwAA9kbnMucHVyZWRucy5vcmcKL2Rucy1xdWVyeQ",
      description: "Alternative encryption",
    },
  ];

  const plainDNS = {
    ipv4: ["202.155.157.201", "157.15.124.220"],
    ipv6: ["2001:df7:5300:18::64f", "2001:df7:5300:15::dc"],
  };

  return (
    <section id="protocols" className="pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8 rounded-xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              RECOMMENDED
            </div>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">{primaryProtocol.name}</h3>
          </div>
          <p className="mb-4 text-sm text-foreground/80">
            {primaryProtocol.description}
          </p>

          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">
              Copy this address:
            </p>

            <div className="rounded-lg bg-background p-3 shadow-sm space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-2">
              {/* Address */}
              <code className="block w-full font-mono text-sm break-all sm:flex-1">
                {primaryProtocol.address}
              </code>

              {/* Copy Button */}
              <Button
                size="sm"
                onClick={() => copyToClipboard(primaryProtocol.address)}
                className="w-full sm:w-auto sm:shrink-0"
              >
                {copiedText === primaryProtocol.address ? (
                  <>
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold">Other Options</h3>
          </div>
          <div className="space-y-3">
            {otherProtocols.map((protocol) => (
              <div
                key={protocol.name}
                className="rounded-lg border bg-card p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="font-medium">{protocol.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      • {protocol.description}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
                  <code className="flex-1 font-mono text-xs break-all">
                    {protocol.address}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(protocol.address)}
                    className="shrink-0 h-8 px-2"
                  >
                    {copiedText === protocol.address ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950/20">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-sm font-semibold">Plain DNS</h3>
              <span className="rounded bg-orange-200 px-2 py-0.5 text-xs font-medium text-orange-900 dark:bg-orange-900 dark:text-orange-200">
                Not Private
              </span>
            </div>
            <p className="mb-3 text-xs text-muted-foreground">
              These addresses work but don't protect your privacy. Use HTTPS
              above instead.
            </p>
            <div className="space-y-3">
              <div>
                <p className="mb-2 text-xs font-medium">IPv4</p>
                <div className="space-y-1">
                  {plainDNS.ipv4.map((ip) => (
                    <div
                      key={ip}
                      className="flex items-center gap-2 rounded-md bg-background px-3 py-2"
                    >
                      <code className="flex-1 font-mono text-xs">{ip}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(ip)}
                        className="shrink-0 h-6 w-6 p-0"
                      >
                        {copiedText === ip ? (
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium">IPv6</p>
                <div className="space-y-1">
                  {plainDNS.ipv6.map((ip) => (
                    <div
                      key={ip}
                      className="flex items-center gap-2 rounded-md bg-background px-3 py-2"
                    >
                      <code className="flex-1 font-mono text-xs break-all">
                        {ip}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(ip)}
                        className="shrink-0 h-6 w-6 p-0"
                      >
                        {copiedText === ip ? (
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
