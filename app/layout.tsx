import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JP Larkin",
  description: "John Paul Larkin developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-box-bg mt-[2rem]">
      <body className={poppins.className}>
        <div className="pt-[2rem]...">{children}</div>
      </body>
    </html>
  );
}
