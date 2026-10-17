import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "وسيط | منصة الأعمال الموثوقة", description: "أدر طلباتك، تواصل مع مقدمي الخدمات، واكتشف حلولاً موثوقة من لوحة وسيط.", keywords: ["وسيط", "الخدمات", "الأعمال", "السعودية"] }
export const viewport: Viewport = { themeColor: "#10343b", userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
