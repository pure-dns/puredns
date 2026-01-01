import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-20 md:pt-24 mb-12">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Headline */}
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl font-mono">
            How to secure your internet{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            in Indonesia with <em>pure</em> DNS
          </h1>

          {/* Subtext */}
          <p className="mt-3 max-w-md text-balance text-sm text-muted-foreground md:text-base font-mono">
            No VPN. No proxy. Just <em>pure</em> DNS.
          </p>

          {/* Press */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground font-mono">
              As Seen In
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.liputan6.com/tekno/read/4961424/pengembang-indie-lokal-tawarkan-secure-dns-gratis-untuk-koneksi-internet-aman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Image
                  src="/images/logo-liputan6.png"
                  alt="Liputan6"
                  width={120}
                  height={24}
                />
              </a>

              <a
                href="https://www.nongkrong.co/lifestyle/pr-4313229619/cara-menggunakan-dns-gratis-untuk-membuka-situs-yang-terblokir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Image
                  src="/images/logo-nongkrongco.png"
                  alt="nongkrong.co"
                  width={120}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
