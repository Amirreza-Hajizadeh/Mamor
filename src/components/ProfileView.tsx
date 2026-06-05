import React from 'react';
import { X, Trophy, Bookmark, Settings, Crown, ShieldCheck, Sun, Moon, LogOut, ChevronRight, Star, Clock } from 'lucide-react';

export default function ProfileView({ onClose, toggleTheme, isDark }: any) {
  return (
    <div className="absolute inset-0 bg-slate-50 dark:bg-[#0f0f13] z-[100] animate-in slide-in-from-bottom-6 duration-200 overflow-y-auto w-full h-full pb-10 flex flex-col items-center transition-colors">
      
      {/* Header */}
      <div className="w-full max-w-[600px] sticky top-0 z-20 bg-slate-50/90 dark:bg-[#0f0f13]/90 backdrop-blur-md px-5 py-4 flex justify-between items-center border-b border-slate-200 dark:border-white/5 transition-colors">
        <button onClick={onClose} className="text-slate-800 dark:text-white active:scale-95 transition-transform flex items-center gap-2">
           <ChevronRight size={22} className="rotate-180" />
           <span className="font-bold text-[16px]">پروفایل من</span>
        </button>
        <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1a1a24] flex items-center justify-center text-slate-700 dark:text-slate-300 active:scale-95 transition-all">
           {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="w-full max-w-[600px] px-5 pt-8 pb-2 relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-iran-blue/10 dark:bg-purple-600/10 rounded-full blur-[60px] pointer-events-none -z-10"></div>
        
        <div className="flex items-start justify-between mb-6">
            <div className="w-24 h-24 rounded-[28px] bg-slate-200 dark:bg-[#1f1f2e] border-2 border-iran-blue/20 dark:border-purple-500/20 shadow-inner flex items-center justify-center shrink-0 overflow-hidden relative">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="Profile" className="w-full h-full object-cover scale-110 translate-y-1" />
            </div>
            <div className="flex flex-col items-end gap-2 mt-1">
                <button className="px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white text-[12px] font-bold shadow-sm">
                    ویرایش پروفایل
                </button>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-full bg-iran-blue dark:bg-purple-600 text-white text-[12px] font-bold shadow-sm">
                        + پست جدید
                    </button>
                    <button className="px-3 py-1.5 rounded-full border border-iran-teal/30 dark:border-emerald-500/30 text-iran-teal dark:text-emerald-400 text-[12px] font-bold flex items-center gap-1 bg-iran-teal/5 dark:bg-emerald-500/10">
                        <Star size={14} /> ویژه
                    </button>
                </div>
            </div>
        </div>

        <div className="mb-6">
            <h2 className="font-extrabold text-[22px] text-slate-900 dark:text-white tracking-tight mb-1">امیرمحمد رضایی</h2>
            <p className="text-[13px] text-slate-500 dark:text-[#7a7a8c] mb-2 font-medium">@amirmohammad_rz</p>
            <p className="text-[12px] text-slate-500 dark:text-[#7a7a8c] flex items-center gap-1.5 font-medium">
                <Clock size={14} /> عضویت از شهریور ۱۴۰۱ • توسعه‌دهنده ارشد
            </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[12px] font-bold text-slate-500 dark:text-[#7a7a8c]">امتیاز تجربه</span>
                    <Trophy size={18} className="text-amber-500" />
                </div>
                <div className="font-black text-[22px] text-slate-800 dark:text-white tracking-tight">۱,۴۵۰ <span className="text-[11px] font-bold text-slate-400">XP</span></div>
            </div>
            <div className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-center shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[12px] font-bold text-slate-500 dark:text-[#7a7a8c]">سطح کاربری</span>
                    <ShieldCheck size={18} className="text-iran-teal dark:text-emerald-500" />
                </div>
                <div className="font-bold text-[16px] text-slate-800 dark:text-white mt-1">مدیر ارشد</div>
            </div>
        </div>

        {/* Detailed Settings Menu */}
        <h3 className="font-bold text-[16px] text-slate-800 dark:text-white mb-3 px-1">تنظیمات و شخصی‌سازی</h3>
        
        <div className="bg-white dark:bg-[#1a1a24] rounded-[24px] border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden mb-6 flex flex-col">
            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#20202a] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[16px] bg-slate-100 dark:bg-[#1f1f2e] flex items-center justify-center text-slate-500 dark:text-[#7a7a8c] group-hover:text-iran-blue dark:group-hover:text-purple-400 transition-colors">
                        <Bookmark size={20} />
                    </div>
                    <div>
                        <div className="text-[14px] font-bold text-slate-800 dark:text-white mb-0.5">آیتم‌های ذخیره شده</div>
                        <div className="text-[11px] text-slate-500 dark:text-[#7a7a8c] font-medium">۴۵ مقاله و ویدیو ذخیره شده</div>
                    </div>
                </div>
                <ChevronRight size={20} className="text-slate-400 rotate-180" />
            </div>
            
            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#20202a] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[16px] bg-slate-100 dark:bg-[#1f1f2e] flex items-center justify-center text-slate-500 dark:text-[#7a7a8c] group-hover:text-amber-500 transition-colors">
                        <Star size={20} />
                    </div>
                    <div>
                        <div className="text-[14px] font-bold text-slate-800 dark:text-white mb-0.5">اشتراک ویژه</div>
                        <div className="text-[11px] text-slate-500 dark:text-[#7a7a8c] font-medium">اعتبار تا ۱۵ آبان ۱۴۰۴</div>
                    </div>
                </div>
                <ChevronRight size={20} className="text-slate-400 rotate-180" />
            </div>

            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#20202a] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[16px] bg-slate-100 dark:bg-[#1f1f2e] flex items-center justify-center text-slate-500 dark:text-[#7a7a8c] group-hover:text-iran-teal transition-colors">
                        <Settings size={20} />
                    </div>
                    <div>
                        <div className="text-[14px] font-bold text-slate-800 dark:text-white mb-0.5">تنظیمات اصلی</div>
                        <div className="text-[11px] text-slate-500 dark:text-[#7a7a8c] font-medium">حساب کاربری، حریم خصوصی</div>
                    </div>
                </div>
                <ChevronRight size={20} className="text-slate-400 rotate-180" />
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[16px] bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                        <LogOut size={20} />
                    </div>
                    <div className="text-[14px] font-bold text-red-500">خروج از حساب کاربری</div>
                </div>
            </div>
        </div>
        
        </div>
    </div>
  );
}
