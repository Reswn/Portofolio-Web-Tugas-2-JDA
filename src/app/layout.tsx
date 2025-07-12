// src/app/layout.tsx
import "../styles/globals.css"; // jika kamu pakai Tailwind/global CSS
import type { ReactNode } from "react";
import Navbar from "../components/Navbar"; // pastikan file Navbar.tsx ada di src/components/
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;

export const metadata = {
  title: "Portofolio Reni Kartika Suwandi",
  description: "Ini adalah portofolio web pribadi.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
