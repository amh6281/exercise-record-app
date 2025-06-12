import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymTrack - 헬스 운동 루틴 기록 앱",
  description:
    "5분할 루틴부터 씨범 루틴까지, 헬스 운동 루틴 기록은 GymTrack 하나로!",
  keywords: ["운동 기록", "헬스 루틴", "5분할", "씨범 루틴", "운동일지"],
  themeColor: "#F97316",
  openGraph: {
    title: "GymTrack",
    description:
      "5분할 루틴부터 씨범 루틴까지, 헬스 운동 루틴 기록은 GymTrack 하나로!",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
