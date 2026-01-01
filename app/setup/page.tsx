import { SetupWizard } from "@/components/setup-wizard";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Setup - PureDNS",
  description: "Configure PureDNS on your device with our step-by-step guide",
};

export const revalidate = 300;

export default function SetupPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-20 md:pt-24 mb-16 flex-1">
        <SetupWizard />
      </div>
      <Footer />
    </main>
  );
}
