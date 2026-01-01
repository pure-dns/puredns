import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/puredns-logo.svg"
              width={130}
              height={30}
              alt="PureDNS logo"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hidden sm:block"
            >
              Home
            </Link>
            <Button asChild size="sm" className="gap-2">
              <Link href="/setup">Get started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
