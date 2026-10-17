import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "وسيط | تجارة السكر العالمية", description: "منصة وسيط تربط الموردين بالمشترين المؤسسيين وتدير الصفقة من طلب الشراء حتى الفحص والتسليم.", keywords: ["وسيط", "تجارة السكر", "ICUMSA 45", "البرازيل", "التجارة الدولية"] }
export const viewport: Viewport = { themeColor: "#10343b", userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
