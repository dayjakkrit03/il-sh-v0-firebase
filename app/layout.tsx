import type React from "react"
import type { Metadata } from "next"
import { Sarabun } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sarabun",
})

export const metadata: Metadata = {
  title: "Interlink Shop - อุปกรณ์เครือข่ายและอิเล็กทรอนิกส์",
  description: "ร้านค้าออนไลน์จำหน่ายอุปกรณ์เครือข่าย สายแลน สวิตช์ และอุปกรณ์อิเล็กทรอนิกส์คุณภาพสูง ส่งฟรีทั่วไทย",
  keywords: "สายแลน, สวิตช์, อุปกรณ์เครือข่าย, อิเล็กทรอนิกส์, ไฟเบอร์ออปติก, interlink",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`font-sans ${sarabun.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
