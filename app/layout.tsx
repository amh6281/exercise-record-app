import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitFlow - AI 운동 루틴 & 운동 리포트 생성",
  description:
    "FitFlow는 AI로 오늘의 운동 루틴을 만들어주고, 운동 기록을 자동 분석해 리포트를 생성해주는 간단한 운동 도우미 서비스입니다.",
  keywords: [
    "운동 루틴 추천",
    "운동 루틴 생성",
    "AI 운동 루틴",
    "운동 분할 추천",
    "오늘 운동 뭐하지",
    "운동 프로그램 추천",
  ],
  metadataBase: new URL("https://fitflow.example.com"),
  openGraph: {
    title: "FitFlow - AI 운동 루틴 & 운동 리포트 생성",
    description:
      "로그인 없이 AI로 오늘의 운동 루틴과 운동 리포트를 빠르게 만들어보세요.",
    type: "website",
    url: "https://fitflow.example.com",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
