import { Server, Lock, Zap, Globe, Shield, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl font-mono">
            About PureDNS
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            How PureDNS keeps your internet connection secure and private.
          </p>
        </div>

        <div className="space-y-6">
          {/* What is PureDNS */}
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">What is PureDNS?</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PureDNS is a secure DNS resolver designed specifically for users
              in Indonesia. When you browse the internet, your device needs to
              translate domain names (like google.com) into IP addresses. This
              process is called DNS resolution. PureDNS handles this translation
              securely, protecting your privacy and ensuring unrestricted access
              to the internet.
            </p>
          </div>

          {/* Our Mission */}
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Our Mission</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beyond providing a free DNS service, PureDNS is part of an effort
              to improve internet security literacy in Indonesia. By making
              encrypted DNS accessible and easy to understand, we aim to educate
              users about online privacy, help them understand how their
              internet connection works, and empower them to take control of
              their digital security.
            </p>
          </div>

          {/* How it works */}
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">How Does It Work?</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Traditional DNS queries are sent in plain text, meaning your
              internet provider can see every website you visit. PureDNS uses
              encrypted DNS protocols (DoH, DoT, DoQ) to ensure your DNS queries
              are private and cannot be intercepted or modified.
            </p>
            <div className="space-y-2">
              <div className="rounded-md bg-muted p-3">
                <p className="text-xs font-medium mb-1">DNS-over-HTTPS (DoH)</p>
                <p className="text-xs text-muted-foreground">
                  Encrypts DNS queries using HTTPS, the same protocol that
                  secures website connections.
                </p>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-xs font-medium mb-1">DNS-over-TLS (DoT)</p>
                <p className="text-xs text-muted-foreground">
                  Uses TLS encryption on port 853 for secure DNS resolution.
                </p>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-xs font-medium mb-1">DNS-over-QUIC (DoQ)</p>
                <p className="text-xs text-muted-foreground">
                  Modern protocol offering faster connections and improved
                  performance, port 853 UDP.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Privacy & Security</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">
                    No logging:
                  </strong>{" "}
                  We don't store any records of the websites you visit.
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">
                    DNSSEC validation:
                  </strong>{" "}
                  Protects against DNS spoofing and cache poisoning attacks.
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">
                    Encrypted queries:
                  </strong>{" "}
                  All DNS requests are encrypted using DoH, DoT, and DoQ.
                </span>
              </li>
            </ul>
          </div>

          {/* Why for Indonesia */}
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Why Indonesia?</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              PureDNS was created by an Indonesian developer to address specific
              challenges faced by internet users in Indonesia:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>Bypass DNS-based blocking without needing a VPN.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>Servers optimized for low latency from Indonesia.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <span className="text-primary">•</span>
                <span>Free and accessible to everyone.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
