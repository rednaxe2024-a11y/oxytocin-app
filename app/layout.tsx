import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Oxytocin | Ангел отношений",
  description: "Пространство для бережных отношений",
  generator: "Next.js",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-[#FDFBF7] text-[#4A403A]">
        <main className="min-h-screen max-w-md mx-auto bg-[#FDFBF7] relative shadow-xl overflow-hidden min-h-[844px]">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
