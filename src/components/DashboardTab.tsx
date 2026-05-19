import React from 'react';
import { Target, Trophy, Clock, Bookmark, ChevronLeft, Hexagon, Star, Zap, Flame, ShieldCheck, BookOpen, Layers, Lock, PlayCircle, Gamepad2, Compass, FileText, Database, Network, Search, PenTool, LayoutTemplate } from 'lucide-react';

export default function DashboardTab() {
  const SERVICES = [
    { title: 'موزیک ایران گرد', subtitle: 'پخش آنلاین موزیک، استریمینگ، پلی‌لیست‌ها و پادکست', icon: Target, color: 'text-iran-blue dark:text-purple-400', bg: 'bg-iran-blue/10 dark:bg-purple-500/20', badge: 'LIVE', badgeColor: 'bg-iran-blue dark:bg-purple-600' },
    { title: 'تلویزیون آنلاین', subtitle: 'پخش آنلاین شبکه های داخلی و سرگرمی به صورت زنده', icon: PlayCircle, color: 'text-iran-red dark:text-rose-400', bg: 'bg-iran-red/10 dark:bg-rose-500/20', badge: 'LIVE', badgeColor: 'bg-iran-red dark:bg-rose-600' },
    { title: 'بوکمارک و ذخیره‌ها', subtitle: 'مدیریت و دسته بندی لینک‌ها و مطالب ذخیره شده', icon: Bookmark, color: 'text-amber-500 dark:text-orange-400', bg: 'bg-amber-500/10 dark:bg-orange-500/20', badge: 'شخصی', badgeColor: 'bg-amber-500 dark:bg-orange-600' },
    { title: 'ابزارهای PDF', subtitle: 'ویرایش، ترکیب، فشرده‌سازی و تبدیل فایل‌های PDF', icon: FileText, color: 'text-iran-teal dark:text-teal-400', bg: 'bg-iran-teal/10 dark:bg-teal-500/20', badge: 'کاربردی', badgeColor: 'bg-iran-teal dark:bg-teal-600' },
    { title: 'ویرایشگر تصویر', subtitle: 'ویرایش آنلاین تصاویر، فیلترها و بهینه‌سازی حجم', icon: LayoutTemplate, color: 'text-indigo-500 dark:text-indigo-400', bg: 'bg-indigo-500/10 dark:bg-indigo-500/20', badge: 'جدید', badgeColor: 'bg-indigo-500 dark:bg-indigo-600' },
    { title: 'وبلاگ ساز', subtitle: 'ایجاد و مدیریت وبلاگ شخصی و انتشار محتوا متنی', icon: PenTool, color: 'text-pink-500 dark:text-pink-400', bg: 'bg-pink-500/10 dark:bg-pink-500/20', badge: 'کلاسیک', badgeColor: 'bg-pink-500 dark:bg-pink-600' },
    { title: 'جستجو و خلاصه AI', subtitle: 'جستجوی هوشمند و خلاصه‌سازی متون با API های مختلف', icon: Search, color: 'text-sky-500 dark:text-blue-400', bg: 'bg-sky-500/10 dark:bg-blue-500/20', badge: 'هوش مصنوعی', badgeColor: 'bg-sky-500 dark:bg-blue-600' },
    { title: 'نقشه ذهنی (Mindmap)', subtitle: 'ایجاد نمودارهای مایندمپ با هوش مصنوعی و ترسیم', icon: Network, color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', badge: 'ابزار', badgeColor: 'bg-emerald-500 dark:bg-emerald-600' },
    { title: 'نقشه و مسیریابی', subtitle: 'مسیریاب هوشمند برای دور زدن ترافیک و پیدا کردن مسیرها', icon: Compass, color: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-500/20', badge: 'Pro', badgeColor: 'bg-orange-500 dark:bg-orange-600' },
    { title: 'گیم سنتر', subtitle: 'سرورهای بازی چندنفره و بازی‌های رقابتی تحت وب', icon: Gamepad2, color: 'text-fuchsia-500 dark:text-fuchsia-400', bg: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20', badge: 'بزودی', badgeColor: 'bg-slate-300 dark:bg-[#2a2a35] text-slate-700 dark:text-white' },
  ];

  return (
    <div className="px-5 py-4 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <h2 className="text-[20px] font-black text-slate-800 dark:text-white tracking-tight mb-6 px-1">
          سرویس‌ها
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((s, i) => (
          <div key={i} className="bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 rounded-[20px] p-5 flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1a1a24] shadow-sm dark:shadow-none transition-colors">
            <div className={`w-16 h-16 rounded-[20px] ${s.bg} flex items-center justify-center mb-4`}>
              <s.icon size={28} className={s.color} />
            </div>
            <h3 className="text-[15px] font-bold text-slate-800 dark:text-white mb-2">{s.title}</h3>
            <p className="text-[11px] text-slate-500 dark:text-[#7a7a8c] leading-relaxed mb-4 font-medium flex-1">
              {s.subtitle}
            </p>
            <div className={`text-[10px] font-bold text-white px-3 py-1 rounded-full ${s.badgeColor}`}>
              {s.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
