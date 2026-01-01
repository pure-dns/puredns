"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Laptop,
  Smartphone,
  Wifi,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  Shield,
  AlertCircle,
} from "lucide-react";
import type { JSX } from "react/jsx-runtime"; // Import JSX to fix the undeclared variable error

type DeviceType =
  | "windows"
  | "mac"
  | "ios"
  | "android"
  | "router"
  | "browsers"
  | null;
type Protocol = "https" | "tls" | "plain";

interface Device {
  id: DeviceType;
  name: string;
  icon: typeof Laptop;
  description: string;
  protocols: Protocol[];
}

export function SetupWizard() {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>(null);
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol>("https");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const devices: Device[] = [
    {
      id: "windows",
      name: "Windows",
      icon: Laptop,
      description: "Windows 10/11 PC",
      protocols: ["https", "plain"],
    },
    {
      id: "mac",
      name: "macOS",
      icon: Laptop,
      description: "MacBook, iMac",
      protocols: ["https", "plain"],
    },
    {
      id: "ios",
      name: "iOS",
      icon: Smartphone,
      description: "iPhone, iPad",
      protocols: ["https"],
    },
    {
      id: "android",
      name: "Android",
      icon: Smartphone,
      description: "Android phone/tablet",
      protocols: ["tls"],
    },
    {
      id: "router",
      name: "Router",
      icon: Wifi,
      description: "Wi-Fi Router",
      protocols: ["plain"],
    },
    {
      id: "browsers",
      name: "Browsers",
      icon: Laptop,
      description: "Chrome, Firefox, Edge, Brave",
      protocols: ["https"],
    },
  ];

  const dnsAddresses = {
    https: "https://dns.puredns.org/dns-query",
    tls: "tls://dns.puredns.org",
    plain: {
      ipv4: ["202.155.157.201", "157.15.124.220"],
      ipv6: ["2001:df7:5300:18::64f", "2001:df7:5300:15::dc"],
    },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getInstructions = () => {
    if (!selectedDevice) return null;

    const instructions: Record<DeviceType, JSX.Element> = {
      windows: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {selectedProtocol === "https"
                ? "Using Encrypted DNS (Recommended)"
                : "Using Plain DNS"}
            </h4>
            {selectedProtocol === "https" ? (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong> →{" "}
                  <strong>Network & Internet</strong>
                </li>
                <li>
                  Click on <strong>Properties</strong> for your active network
                </li>
                <li>
                  Scroll down and click <strong>Edit</strong> under DNS settings
                </li>
                <li>
                  Select <strong>Manual</strong>, turn on <strong>IPv4</strong>
                </li>
                <li>
                  Under "Preferred DNS", paste this address:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      {dnsAddresses.https}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(dnsAddresses.https)}
                      className="shrink-0"
                    >
                      {copiedText === dnsAddresses.https ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
                <li>
                  Set <strong>DNS over HTTPS</strong> to{" "}
                  <strong>On (automatic template)</strong>
                </li>
                <li>
                  Click <strong>Save</strong>
                </li>
              </ol>
            ) : (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong> →{" "}
                  <strong>Network & Internet</strong>
                </li>
                <li>
                  Click on <strong>Properties</strong> for your active network
                </li>
                <li>
                  Scroll down and click <strong>Edit</strong> under DNS settings
                </li>
                <li>
                  Select <strong>Manual</strong>, turn on <strong>IPv4</strong>
                </li>
                <li>
                  Enter these DNS servers:
                  <div className="mt-2 space-y-2">
                    {dnsAddresses.plain.ipv4.map((ip, idx) => (
                      <div
                        key={ip}
                        className="flex items-center gap-2 rounded-md bg-background p-3"
                      >
                        <span className="text-xs font-medium w-20">
                          {idx === 0 ? "Preferred:" : "Alternate:"}
                        </span>
                        <code className="flex-1 font-mono text-xs">{ip}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(ip)}
                          className="shrink-0"
                        >
                          {copiedText === ip ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  Click <strong>Save</strong>
                </li>
              </ol>
            )}
          </div>
        </div>
      ),
      mac: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {selectedProtocol === "https"
                ? "Using Encrypted DNS (Recommended)"
                : "Using Plain DNS"}
            </h4>
            {selectedProtocol === "https" ? (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>System Settings</strong> →{" "}
                  <strong>Network</strong>
                </li>
                <li>Select your active connection (Wi-Fi or Ethernet)</li>
                <li>
                  Click <strong>Details</strong>
                </li>
                <li>
                  Go to the <strong>DNS</strong> tab
                </li>
                <li>
                  Click the <strong>+</strong> button under DNS Servers
                </li>
                <li>
                  Paste this address:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      {dnsAddresses.https}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(dnsAddresses.https)}
                      className="shrink-0"
                    >
                      {copiedText === dnsAddresses.https ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
                <li>
                  Click <strong>OK</strong>, then <strong>Apply</strong>
                </li>
              </ol>
            ) : (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>System Settings</strong> →{" "}
                  <strong>Network</strong>
                </li>
                <li>Select your active connection (Wi-Fi or Ethernet)</li>
                <li>
                  Click <strong>Details</strong>
                </li>
                <li>
                  Go to the <strong>DNS</strong> tab
                </li>
                <li>
                  Click the <strong>+</strong> button and add these servers:
                  <div className="mt-2 space-y-2">
                    {dnsAddresses.plain.ipv4.map((ip) => (
                      <div
                        key={ip}
                        className="flex items-center gap-2 rounded-md bg-background p-3"
                      >
                        <code className="flex-1 font-mono text-xs">{ip}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(ip)}
                          className="shrink-0"
                        >
                          {copiedText === ip ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  Click <strong>OK</strong>, then <strong>Apply</strong>
                </li>
              </ol>
            )}
          </div>
        </div>
      ),
      ios: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {selectedProtocol === "https"
                ? "Using Encrypted DNS (Recommended)"
                : "Using Plain DNS"}
            </h4>
            {selectedProtocol === "https" ? (
              <>
                <div className="mb-3 flex items-start gap-2 rounded-md bg-accent/20 p-3 border border-border">
                  <AlertCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  <p className="text-xs text-foreground">
                    iOS requires a configuration profile for DNS over HTTPS.
                    We'll guide you through downloading it.
                  </p>
                </div>
                <ol className="space-y-3 ml-4 list-decimal">
                  <li>
                    On your iPhone/iPad, download this configuration profile:
                    <a href="/apple/PureDNS.mobileconfig">
                      <Button className="block">Download profile</Button>
                    </a>
                  </li>
                  <li>
                    Tap <strong>Allow</strong> to download the profile
                  </li>
                  <li>
                    Open <strong>Settings</strong> →{" "}
                    <strong>Profile Downloaded</strong>
                  </li>
                  <li>
                    Tap <strong>Install</strong> in the top right
                  </li>
                  <li>Enter your device passcode if prompted</li>
                  <li>
                    Tap <strong>Install</strong> again to confirm
                  </li>
                </ol>
              </>
            ) : (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong> → <strong>Wi-Fi</strong>
                </li>
                <li>
                  Tap the <strong>ⓘ</strong> next to your connected network
                </li>
                <li>
                  Scroll down and tap <strong>Configure DNS</strong>
                </li>
                <li>
                  Select <strong>Manual</strong>
                </li>
                <li>
                  Tap <strong>+ Add Server</strong> and enter:
                  <div className="mt-2 space-y-2">
                    {dnsAddresses.plain.ipv4.map((ip) => (
                      <div
                        key={ip}
                        className="flex items-center gap-2 rounded-md bg-background p-3"
                      >
                        <code className="flex-1 font-mono text-xs">{ip}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(ip)}
                          className="shrink-0"
                        >
                          {copiedText === ip ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  Tap <strong>Save</strong>
                </li>
              </ol>
            )}
          </div>
        </div>
      ),
      android: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {selectedProtocol === "tls"
                ? "Using Private DNS (Recommended)"
                : "Using Plain DNS"}
            </h4>
            {selectedProtocol === "tls" ? (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong> →{" "}
                  <strong>Network & Internet</strong>
                </li>
                <li>
                  Tap <strong>Private DNS</strong>
                </li>
                <li>
                  Select <strong>Private DNS provider hostname</strong>
                </li>
                <li>
                  Enter this hostname:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs">
                      dns.puredns.org
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("dns.puredns.org")}
                      className="shrink-0"
                    >
                      {copiedText === "dns.puredns.org" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
                <li>
                  Tap <strong>Save</strong>
                </li>
              </ol>
            ) : (
              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong> →{" "}
                  <strong>Network & Internet</strong>
                </li>
                <li>
                  Tap <strong>Wi-Fi</strong> and long-press your connected
                  network
                </li>
                <li>
                  Tap <strong>Modify network</strong> →{" "}
                  <strong>Advanced options</strong>
                </li>
                <li>
                  Change <strong>IP settings</strong> to <strong>Static</strong>
                </li>
                <li>
                  Enter these DNS servers:
                  <div className="mt-2 space-y-2">
                    {dnsAddresses.plain.ipv4.map((ip, idx) => (
                      <div
                        key={ip}
                        className="flex items-center gap-2 rounded-md bg-background p-3"
                      >
                        <span className="text-xs font-medium w-16">
                          {idx === 0 ? "DNS 1:" : "DNS 2:"}
                        </span>
                        <code className="flex-1 font-mono text-xs">{ip}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(ip)}
                          className="shrink-0"
                        >
                          {copiedText === ip ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  Tap <strong>Save</strong>
                </li>
              </ol>
            )}
          </div>
        </div>
      ),
      router: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Configuring Router DNS
            </h4>
            <div className="mb-3 flex items-start gap-2 rounded-md bg-accent/20 p-3 border border-border">
              <AlertCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
              <p className="text-xs text-foreground">
                These steps vary by router brand. Look for "DNS" or "DNS Server"
                in your router settings.
              </p>
            </div>
            <ol className="space-y-3 ml-4 list-decimal">
              <li>
                Open your router's admin panel (usually <code>192.168.1.1</code>{" "}
                or <code>192.168.0.1</code>)
              </li>
              <li>Login with your admin credentials</li>
              <li>
                Find the <strong>DNS</strong> or <strong>DHCP Settings</strong>{" "}
                section
              </li>
              <li>
                Set Primary and Secondary DNS to:
                <div className="mt-2 space-y-2">
                  {dnsAddresses.plain.ipv4.map((ip, idx) => (
                    <div
                      key={ip}
                      className="flex items-center gap-2 rounded-md bg-background p-3"
                    >
                      <span className="text-xs font-medium w-20">
                        {idx === 0 ? "Primary:" : "Secondary:"}
                      </span>
                      <code className="flex-1 font-mono text-xs">{ip}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(ip)}
                        className="shrink-0"
                      >
                        {copiedText === ip ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </li>
              <li>
                Click <strong>Save</strong> or <strong>Apply</strong>
              </li>
              <li>Restart your router if required</li>
              <li>Reconnect your devices to Wi-Fi</li>
            </ol>
          </div>
        </div>
      ),
      browsers: (
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-accent/10 p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Using Encrypted DNS (Recommended)
            </h4>

            {/* Google Chrome */}
            <div className="mb-6">
              <h5 className="font-semibold mb-2">Google Chrome</h5>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>
                  Go to <strong>Settings</strong>
                </li>
                <li>
                  In the <strong>Privacy and security</strong> section, click on{" "}
                  <strong>Security</strong>
                </li>
                <li>
                  In the <strong>Advanced</strong> section, enable{" "}
                  <strong>Use secure DNS</strong>
                </li>
                <li>
                  Select <strong>Add custom DNS service provider</strong>, then
                  enter:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      https://puredns.org/dns-query
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("https://puredns.org/dns-query")
                      }
                      className="shrink-0"
                    >
                      {copiedText === "https://puredns.org/dns-query" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
              </ol>
            </div>

            {/* Firefox */}
            <div className="mb-6">
              <h5 className="font-semibold mb-2">Firefox</h5>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>
                  Open <strong>Preferences</strong>
                </li>
                <li>
                  Scroll down to the <strong>Network Settings</strong> section
                  and click on <strong>Settings</strong>
                </li>
                <li>
                  Scroll down and check <strong>Enable DNS over HTTPS</strong>
                </li>
                <li>
                  Select <strong>Custom</strong>, enter the following and click{" "}
                  <strong>OK</strong>:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      https://puredns.org/dns-query
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("https://puredns.org/dns-query")
                      }
                      className="shrink-0"
                    >
                      {copiedText === "https://puredns.org/dns-query" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
              </ol>
            </div>

            {/* Microsoft Edge */}
            <div className="mb-6">
              <h5 className="font-semibold mb-2">Microsoft Edge</h5>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong>
                </li>
                <li>
                  Go to the <strong>Privacy, search, and services</strong>{" "}
                  section
                </li>
                <li>
                  Under <strong>Security</strong>, enable{" "}
                  <strong>
                    Use secure DNS to specify how to lookup the network address
                    for websites
                  </strong>
                </li>
                <li>
                  Select <strong>Choose a service provider</strong>, then enter:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      https://puredns.org/dns-query
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("https://puredns.org/dns-query")
                      }
                      className="shrink-0"
                    >
                      {copiedText === "https://puredns.org/dns-query" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
              </ol>
            </div>

            {/* Brave */}
            <div>
              <h5 className="font-semibold mb-2">Brave</h5>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>
                  Open <strong>Settings</strong>
                </li>
                <li>
                  In the <strong>Privacy and security</strong> section (under{" "}
                  <strong>Additional settings</strong>), go to{" "}
                  <strong>Security</strong>
                </li>
                <li>
                  In the <strong>Advanced</strong> section, enable{" "}
                  <strong>Use secure DNS</strong>
                </li>
                <li>
                  Select <strong>Add custom DNS service provider</strong>, then
                  enter:
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-background p-3">
                    <code className="flex-1 font-mono text-xs break-all">
                      https://puredns.org/dns-query
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("https://puredns.org/dns-query")
                      }
                      className="shrink-0"
                    >
                      {copiedText === "https://puredns.org/dns-query" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      ),
    };

    return instructions[selectedDevice];
  };

  const currentDevice = devices.find((d) => d.id === selectedDevice);
  const availableProtocols = currentDevice?.protocols || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Setup PureDNS
        </h1>
        <p className="text-muted-foreground">
          Follow the steps to configure PureDNS on your device
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                s < step
                  ? "border-primary bg-primary text-primary-foreground"
                  : s === step
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              {s < step ? <CheckCircle2 className="h-4 w-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 w-12 transition-colors ${
                  s < step ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Choose Device */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Choose Your Device</CardTitle>
            <CardDescription>
              Select the device you want to configure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {devices.map((device) => {
                const Icon = device.icon;
                return (
                  <button
                    key={device.id}
                    onClick={() => {
                      setSelectedDevice(device.id);
                      setSelectedProtocol(
                        device.id === "android" ? "tls" : "https"
                      );
                    }}
                    className={`flex items-start gap-3 rounded-lg border p-4 text-left transition-all hover:bg-accent/5 ${
                      selectedDevice === device.id
                        ? "border-foreground bg-accent/5"
                        : "border-muted-foreground/30 hover:border-muted-foreground/50"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 shrink-0 mt-0.5 ${
                        selectedDevice === device.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{device.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {device.description}
                      </div>
                    </div>
                    {selectedDevice === device.id && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!selectedDevice}
                className="gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Choose Protocol */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Choose Protocol</CardTitle>
            <CardDescription>
              Select how you want to connect to PureDNS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {availableProtocols.includes("https") && (
                <button
                  onClick={() => setSelectedProtocol("https")}
                  className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all hover:bg-accent/5 ${
                    selectedProtocol === "https"
                      ? "border-foreground bg-accent/5"
                      : "border-muted-foreground/30 hover:border-muted-foreground/50"
                  }`}
                >
                  <Shield
                    className={`h-5 w-5 shrink-0 mt-0.5 text-green-600`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">
                        Encrypted DNS (HTTPS)
                      </span>
                      <span className="rounded bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
                        Recommended
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Maximum privacy and security. Your DNS queries are
                      encrypted.
                    </div>
                  </div>
                  {selectedProtocol === "https" && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground" />
                  )}
                </button>
              )}

              {availableProtocols.includes("tls") && (
                <button
                  onClick={() => setSelectedProtocol("tls")}
                  className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all hover:bg-accent/5 ${
                    selectedProtocol === "tls"
                      ? "border-foreground bg-accent/5"
                      : "border-muted-foreground/30 hover:border-muted-foreground/50"
                  }`}
                >
                  <Shield
                    className={`h-5 w-5 shrink-0 mt-0.5 text-green-600`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Encrypted DNS (TLS)</span>
                      <span className="rounded bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
                        Recommended
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Maximum privacy and security. Your DNS queries are
                      encrypted using TLS.
                    </div>
                  </div>
                  {selectedProtocol === "tls" && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground" />
                  )}
                </button>
              )}

              {availableProtocols.includes("plain") && (
                <button
                  onClick={() => setSelectedProtocol("plain")}
                  className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all hover:bg-accent/5 ${
                    selectedProtocol === "plain"
                      ? "border-foreground bg-accent/5"
                      : "border-muted-foreground/30 hover:border-muted-foreground/50"
                  }`}
                >
                  <AlertCircle
                    className={`h-5 w-5 shrink-0 mt-0.5 text-orange-600`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Plain DNS</span>
                      <span className="rounded bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-800 dark:text-orange-200">
                        Not Private
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Basic DNS without encryption. Works on all devices but
                      less secure.
                    </div>
                  </div>
                  {selectedProtocol === "plain" && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground" />
                  )}
                </button>
              )}
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="gap-2 hover:bg-white hover:text-foreground hover:border hover:border-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="gap-2">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Instructions */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 3: Configuration Instructions</CardTitle>
            <CardDescription>
              Follow these steps to configure PureDNS on your{" "}
              {currentDevice?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {getInstructions()}

            <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-950/20 p-4 border-2 border-green-600 dark:border-green-500">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                    You're all set!
                  </h4>
                  <p className="text-xs text-green-800 dark:text-green-200">
                    After completing these steps, your device will use PureDNS
                    for safer browsing. Visit the homepage to verify your
                    connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                className="gap-2 hover:bg-white hover:text-foreground hover:border hover:border-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                className="gap-2"
              >
                Go to Homepage
                <CheckCircle2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
