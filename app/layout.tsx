import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "وسيط | منصة الخدمات الموثوقة", description: "منصة وسيط لربط العملاء بأفضل مقدمي الخدمات" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
