"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Bell, BriefcaseBusiness, ChevronDown, CircleHelp, FileCheck2, Home, LayoutGrid, Menu, MessageSquare, Search, Settings, ShieldCheck, Star, WalletCards, X, ArrowUpLeft, Plus, Sparkles } from "lucide-react"

const services = [
  { title: "سكر أبيض مكرر ICUMSA 45", category: "البرازيل · ميناء سانتوس", provider: "مورد موثّق", price: "عرض سعر عند الطلب", rating: "4.9", color: "#f4e7c4", icon: "S" },
  { title: "توريد السكر للمؤسسات", category: "الخليج العربي · عقود دورية", provider: "فريق وسيط التجاري", price: "طلب تفاوض", rating: "4.8", color: "#dcebe7", icon: "W" },
  { title: "فحص وشحن المستندات", category: "توثيق · شحن دولي", provider: "مكتب التجارة بدبي", price: "خدمة مضافة", rating: "5.0", color: "#e8e0f1", icon: "✓" },
]

const nav = [
  { label: "نظرة عامة", icon: Home },
  { label: "الفرص التجارية", icon: LayoutGrid },
  { label: "طلباتي التجارية", icon: BriefcaseBusiness },
  { label: "غرفة الصفقة", icon: MessageSquare },
  { label: "المستندات", icon: WalletCards },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("نظرة عامة")
  const [query, setQuery] = useState("")
  const filteredServices = useMemo(() => services.filter((service) => `${service.title} ${service.category} ${service.provider}`.includes(query.trim())), [query])

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#152d35]">
      <aside className={`fixed inset-y-0 right-0 z-30 flex w-[272px] flex-col border-l border-[#dce5e2] bg-[#10343b] px-5 py-6 text-white transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-12 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%87%D9%88%D9%8A%D8%A9%20%D9%88%D8%B3%D9%8A%D8%B7%20%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B3%D9%83%D8%B1%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-FgzhfqwHFHkAHTdxeqRext2kMmtxI6.png" alt="شعار وسيط لتجارة السكر العالمية" width={48} height={48} className="rounded-xl bg-white object-contain p-1" priority unoptimized />
            <div><p className="text-lg font-extrabold tracking-tight">WASEET</p><p className="text-[11px] text-[#c4d3cf]">منصة الأعمال الموثوقة</p></div>
          </div>
          <button aria-label="إغلاق القائمة" className="lg:hidden" onClick={() => setMenuOpen(false)}><X /></button>
        </div>
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9eb9b2]">مساحتك</p>
        <nav className="flex flex-col gap-1">{nav.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setMenuOpen(false) }} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active === label ? "bg-[#d6a13a] text-[#10343b] shadow-lg shadow-black/10" : "text-[#d8e4e0] hover:bg-white/10"}`}><Icon className="size-[18px]" />{label}{label === "الرسائل" && <span className="mr-auto rounded-full bg-[#f5d68d] px-2 py-0.5 text-[10px] font-bold text-[#10343b]">3</span>}</button>)}</nav>
        <p className="mb-3 mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9eb9b2]">المساعدة</p>
        <nav className="flex flex-col gap-1"><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#d8e4e0] hover:bg-white/10"><Settings className="size-[18px]" />الإعدادات</button><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#d8e4e0] hover:bg-white/10"><CircleHelp className="size-[18px]" />مركز المساعدة</button></nav>
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4"><div className="mb-3 flex items-center gap-2"><ShieldCheck className="size-5 text-[#d6a13a]" /><span className="text-xs font-bold">حساب موثّق</span></div><p className="text-[11px] leading-5 text-[#c4d3cf]">بياناتك محمية ونلتزم بأعلى معايير الأمان.</p></div>
      </aside>

      <main className="lg:mr-[272px]"><header className="sticky top-0 z-20 flex h-[78px] items-center justify-between border-b border-[#dce5e2] bg-[#f7f6f2]/90 px-5 backdrop-blur-lg lg:px-10"><div className="flex items-center gap-3"><button aria-label="فتح القائمة" className="rounded-lg p-2 hover:bg-white lg:hidden" onClick={() => setMenuOpen(true)}><Menu /></button><label className="hidden items-center gap-2 rounded-xl border border-[#dce5e2] bg-white px-3 py-2.5 text-sm text-[#829794] shadow-sm sm:flex"><Search className="size-4" /><span className="sr-only">البحث عن خدمة أو مزود</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن خدمة أو مزود..." className="w-56 bg-transparent text-sm text-[#152d35] outline-none placeholder:text-[#829794]" /><kbd className="mr-4 rounded-md border border-[#e7eeeb] bg-[#f7f6f2] px-1.5 text-[10px]">⌘ K</kbd></label></div><div className="flex items-center gap-3"><button aria-label="الإشعارات" className="relative rounded-xl border border-[#dce5e2] bg-white p-2.5 text-[#58716f] shadow-sm hover:bg-[#f0f4f1]"><Bell className="size-[18px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#d6a13a]" /></button><div className="hidden h-7 w-px bg-[#dce5e2] sm:block" /><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#dce5e2] text-sm font-bold text-[#10343b]">م</div><div className="hidden text-right sm:block"><p className="text-sm font-bold">محمد العتيبي</p><p className="text-[11px] text-[#829794]">عميل أعمال</p></div><ChevronDown className="size-4 text-[#829794]" /></div></div></header>
        <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-10"><div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-bold text-[#b17b1b]">الثلاثاء، 17 أكتوبر 2026</p><h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">مرحباً محمد، <span className="text-[#829794]">أهلاً بك</span></h1><p className="mt-2 text-sm text-[#58716f]">كل ما تحتاجه لإنجاز أعمالك، في مكان واحد.</p></div><button className="flex items-center justify-center gap-2 rounded-xl bg-[#10343b] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#10343b]/15 transition hover:bg-[#1a4a52]"><Plus className="size-4" />اطلب خدمة جديدة</button></div>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat title="إجمالي الطلبات" value="24" trend="+12.5%" note="مقارنة بالشهر الماضي" icon={BriefcaseBusiness} tone="teal" /><Stat title="الطلبات النشطة" value="07" trend="+2" note="منذ الأسبوع الماضي" icon={FileCheck2} tone="gold" /><Stat title="إجمالي الإنفاق" value="8,450" suffix="ر.س" trend="+8.2%" note="مقارنة بالشهر الماضي" icon={WalletCards} tone="plum" /><Stat title="متوسط التقييم" value="4.9" trend="+0.1" note="من 5.0" icon={Star} tone="blue" /></section>
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_1fr]"><section className="rounded-2xl border border-[#dce5e2] bg-white p-6 shadow-[0_8px_30px_rgba(16,52,59,.04)]"><div className="mb-6 flex items-center justify-between"><div><h2 className="text-lg font-extrabold">طلباتك الأخيرة</h2><p className="mt-1 text-xs text-[#829794]">تابع حالة المشاريع التي تعمل عليها</p></div><button className="text-sm font-bold text-[#b17b1b]">عرض الكل</button></div><div className="flex flex-col gap-1">{[["تطوير متجر إلكتروني", "حلول نمو", "قيد التنفيذ", "#f4e7c4", "12 أكتوبر 2026"],["تصميم هوية بصرية", "استوديو مدار", "مكتمل", "#dcebe7", "08 أكتوبر 2026"],["استشارة قانونية", "مكتب أساس", "بانتظار الدفع", "#e8e0f1", "04 أكتوبر 2026"]].map(([title, provider, status, color, date]) => <div key={title} className="flex items-center gap-3 rounded-xl px-2 py-4 transition hover:bg-[#f7f6f2]"><div style={{ background: color }} className="flex size-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-[#35545a]">{title.slice(0,1)}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{title}</p><p className="mt-1 text-xs text-[#829794]">{provider} · {date}</p></div><span className={`hidden rounded-full px-3 py-1 text-[11px] font-bold sm:block ${status === "مكتمل" ? "bg-[#e4f1ed] text-[#237862]" : status === "قيد التنفيذ" ? "bg-[#fcf2da] text-[#a87518]" : "bg-[#eee8f4] text-[#765d88]"}`}>{status}</span><ArrowUpLeft className="size-4 text-[#b0c1bd]" /></div>)}</div></section>
            <section className="rounded-2xl border border-[#dce5e2] bg-white p-6 shadow-[0_8px_30px_rgba(16,52,59,.04)]"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-extrabold">اقتراحات لك</h2><p className="mt-1 text-xs text-[#829794]">خدمات قد تهمك بناءً على نشاطك</p></div><button className="text-sm font-bold text-[#b17b1b]">استكشاف</button></div><div className="flex flex-col gap-4">{filteredServices.length ? filteredServices.map((s) => <div className="flex items-center gap-3" key={s.title}><div style={{ background: s.color }} className="flex size-12 shrink-0 items-center justify-center rounded-xl text-xl font-bold text-[#35545a]">{s.icon}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{s.title}</p><p className="mt-1 truncate text-xs text-[#829794]">{s.provider} · {s.category}</p><p className="mt-1 text-xs font-semibold text-[#35545a]">{s.price}</p></div><div className="flex items-center gap-1 text-xs font-bold text-[#b17b1b]"><Star className="size-3 fill-current" />{s.rating}</div></div>) : <p className="rounded-xl bg-[#f7f6f2] px-4 py-8 text-center text-sm text-[#58716f]">لا توجد خدمات مطابقة لبحثك.</p>}</div><div className="mt-6 flex items-center gap-2 rounded-xl bg-[#eef5f2] px-3 py-2.5 text-xs font-semibold text-[#477068]"><Sparkles className="size-4 text-[#b17b1b]" />نحدّث الاقتراحات حسب احتياجاتك باستمرار</div></section></div>
        </div></main>
    </div>
  )
}

function Stat({ title, value, suffix, trend, note, icon: Icon, tone }: { title: string; value: string; suffix?: string; trend: string; note: string; icon: typeof Bell; tone: string }) {
  const tones: Record<string, string> = { teal: "bg-[#e4f1ed] text-[#237862]", gold: "bg-[#fcf2da] text-[#a87518]", plum: "bg-[#eee8f4] text-[#765d88]", blue: "bg-[#e4edf2] text-[#3b6d7c]" }
  return <div className="rounded-2xl border border-[#dce5e2] bg-white p-5 shadow-[0_8px_30px_rgba(16,52,59,.04)]"><div className="mb-5 flex items-start justify-between"><div className={`flex size-10 items-center justify-center rounded-xl ${tones[tone]}`}><Icon className="size-5" /></div><span className="rounded-full bg-[#e4f1ed] px-2.5 py-1 text-[11px] font-bold text-[#237862]">{trend}</span></div><p className="text-sm font-medium text-[#58716f]">{title}</p><div className="mt-1 flex items-baseline gap-1"><span className="text-2xl font-extrabold">{value}</span>{suffix && <span className="text-xs font-bold text-[#829794]">{suffix}</span>}</div><p className="mt-2 text-[11px] text-[#829794]">{note}</p></div>
}
