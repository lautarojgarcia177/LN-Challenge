import type { Metadata } from "next";
import "./globals.css";
import ModHeader from "@/components/mod-header";
import ModFooter from "@/components/mod-footer";

export const metadata: Metadata = {
  title: "Acumulado",
  description: "Prueba técnica LN - Lautaro Jorge sGarcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="wrap">
          <ModHeader />
          {children}
          <ModFooter />
        </div>
      </body>
    </html>
  );
}
