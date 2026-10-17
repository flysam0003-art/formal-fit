import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "وسيط | لوحة الخدمات الموثوقة", description: "أدر طلباتك، تواصل مع مقدمي الخدمات، واكتشف حلولاً موثوقة من لوحة وسيط." }
export const viewport: Viewport = { themeColor: "#f6f8fb", userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
