import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Dracaenium - Where Nature Meets Innovation",
  description: "Sophisticated solutions inspired by nature's resilience and beauty",
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/logo.svg`, type: 'image/svg+xml' },
    ],
    apple: [
      { url: `${basePath}/logo.svg`, type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
