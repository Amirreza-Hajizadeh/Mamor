import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronRight, Bookmark, ShieldCheck, Gamepad2, BrainCircuit, Cpu, BookOpen, Briefcase, PenTool, Code, Newspaper, PlayCircle } from 'lucide-react';

const CATEGORIES = [
  { id: 'ai', title: 'هوش مصنوعی', subtitle: 'ابزارها و مدل‌های جدید', icon: BrainCircuit, color: 'text-iran-blue bg-iran-blue/10 dark:text-sky-400 dark:bg-sky-400/10' },
  { id: 'tech', title: 'فناوری', subtitle: 'دانش روز دنیا', icon: Cpu, color: 'text-iran-teal bg-iran-teal/10 dark:text-teal-400 dark:bg-teal-400/10' },
  { id: 'news', title: 'اخبار', subtitle: 'منابع معتبر و سریع', icon: Newspaper, color: 'text-iran-red bg-iran-red/10 dark:text-rose-400 dark:bg-rose-400/10' },
  { id: 'gaming', title: 'بازی', subtitle: 'دنیای سرگرمی و گیم', icon: Gamepad2, color: 'text-purple-500 bg-purple-50 dark:bg-purple-500/10 dark:text-purple-400' },
  { id: 'learning', title: 'یادگیری', subtitle: 'آموزش‌های کاربردی', icon: BookOpen, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400' },
  { id: 'productivity', title: 'بهره‌وری', subtitle: 'مدیریت و توسعه فردی', icon: BrainCircuit, color: 'text-orange-500 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400' },
  { id: 'business', title: 'کسب‌وکار', subtitle: 'استارتاپ‌ها و شرکت‌ها', icon: Briefcase, color: 'text-sky-500 bg-sky-50 dark:bg-sky-500/10 dark:text-sky-400' },
  { id: 'design', title: 'طراحی', subtitle: 'دیزاین و گرافیک', icon: PenTool, color: 'text-pink-500 bg-pink-50 dark:bg-pink-500/10 dark:text-pink-400' },
  { id: 'code', title: 'برنامه‌نویسی', subtitle: 'توسعه وب و اپ', icon: Code, color: 'text-teal-500 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-400' },
  { id: 'security', title: 'امنیت سایبری', subtitle: 'حفاظت و امنیت شبکه', icon: ShieldCheck, color: 'text-slate-500 bg-slate-100 dark:bg-slate-700 dark:text-slate-300' },
];

const SITES = [
  { id: 1, name: 'OpenAI', desc: 'پلتفرم تحقیقاتی پیشرو در هوش مصنوعی', logo: '🧠', logoColor: 'text-emerald-500', rate: '۹۸٪', tags: ['هوش مصنوعی', 'مدل زبانی'], url: 'openai.com' },
  { id: 2, name: 'DeepMind', desc: 'تحقیقات پیشرفته هوش مصنوعی گوگل', logo: '⚛️', logoColor: 'text-iran-blue dark:text-sky-400', rate: '۹۶٪', tags: ['هوش مصنوعی', 'تحقیقات'], url: 'deepmind.google' },
  { id: 3, name: 'Hugging Face', desc: 'جامعه کاربری برای مدل‌های باز', logo: '🤗', logoColor: 'text-yellow-500', rate: '۹۴٪', tags: ['متن‌باز', 'یادگیری ماشین'], url: 'huggingface.co' },
  { id: 4, name: 'Midjourney', desc: 'ابزار تولید تصویر از متن استثنایی', logo: '⛵', logoColor: 'text-slate-700 dark:text-slate-300', rate: '۹۵٪', tags: ['تولید تصویر', 'هنر'], url: 'midjourney.com' },
  { id: 5, name: 'Figma', desc: 'بهترین ابزار طراحی رابط کاربری تیمی', logo: '🎨', logoColor: 'text-purple-500 dark:text-purple-400', rate: '۹۹٪', tags: ['طراحی', 'رابط کاربری'], url: 'figma.com' },
  { id: 6, name: 'Github', desc: 'پلتفرم بستر توسعه نرم‌افزار گروهی', logo: '🐙', logoColor: 'text-slate-900 dark:text-white', rate: '۹۹٪', tags: ['کدنویسی', 'متن‌باز'], url: 'github.com' },
];

export default function LinkDoniTab() {
  const [view, setView] = useState<'cats' | 'sites' | 'detail'>('cats');
  const [activeCat, setActiveCat] = useState<any>(null);
  const [activeSite, setActiveSite] = useState<any>(null);
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  const handleSiteClick = (site: any) => {
    setActiveSite(site);
    setView('detail');
    setRecentlyViewed(prev => {
      const filtered = prev.filter(item => item.id !== site.id);
      return [site, ...filtered].slice(0, 3);
    });
  };

  if (view === 'detail') return <SiteDetail site={activeSite} onBack={() => setView('sites')} />;
  if (view === 'sites') return <CategorySites category={activeCat} onBack={() => setView('cats')} onSiteClick={handleSiteClick} />;

  return (
    <div className="pb-12 animate-in fade-in duration-200">
      <div className="mb-4 relative px-5 pt-4">
        <div className="flex items-center gap-3 bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/5 shadow-sm p-1.5 rounded-full focus-within:border-iran-blue focus-within:shadow-md transition-all">
          <div className="p-2.5 text-slate-400 dark:text-[#7a7a8c] shrink-0">
            <Search size={18} strokeWidth={2.5} />
          </div>
          <input 
            type="text" 
            placeholder="جستجو در اپ..." 
            className="w-full bg-transparent text-[14px] font-medium text-slate-700 dark:text-white focus:outline-none border-none focus:ring-0 px-1 placeholder-slate-400 dark:placeholder-[#7a7a8c]"
          />
          <button className="text-slate-500 dark:text-[#7a7a8c] p-2.5 shrink-0 active:text-iran-blue transition-colors">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {recentlyViewed.length > 0 && (
        <div className="px-5 mb-6">
          <h2 className="font-bold text-[16px] text-slate-800 dark:text-white mb-3 tracking-tight">بازدیدهای اخیر</h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {recentlyViewed.map(site => (
              <div 
                key={site.id} 
                onClick={() => handleSiteClick(site)}
                className="flex-shrink-0 w-[140px] bg-white dark:bg-[#1a1a24] border border-slate-200/60 dark:border-white/5 shadow-sm rounded-2xl p-3 flex flex-col gap-2 cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-[#20202a] active:scale-[0.98]"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[18px] font-black shrink-0 ${site.logoColor}`}>
                    {site.logo}
                  </div>
                  <h3 className="font-bold text-[13px] text-slate-800 dark:text-white truncate flex-1">{site.name}</h3>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-[#7a7a8c] font-medium leading-tight line-clamp-2">{site.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="px-5 mb-3">
        <h2 className="font-bold text-[16px] text-slate-800 dark:text-white tracking-tight">دسته‌بندی‌ها</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            onClick={() => { setActiveCat(cat); setView('sites'); }}
            className="bg-white dark:bg-[#1a1a24] border border-slate-200/60 dark:border-white/5 p-4 rounded-[20px] flex flex-col items-start gap-4 cursor-pointer group hover:bg-slate-50 dark:hover:bg-[#20202a] transition-all active:scale-[0.98]"
          >
            <div className={`w-12 h-12 rounded-[16px] ${cat.color} flex items-center justify-center shrink-0`}>
                <cat.icon size={24} strokeWidth={1.5} />
            </div>
            <div className="text-right w-full">
              <h3 className="font-bold text-[15px] text-slate-800 dark:text-white mb-1">{cat.title}</h3>
              <p className="text-[11px] text-slate-500 dark:text-[#7a7a8c] font-medium leading-tight">{cat.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CategorySites({ category, onBack, onSiteClick }: any) {
  return (
    <div className="pb-12 animate-in slide-in-from-right-4 duration-300">
      <div className="px-6 pt-4 flex items-center justify-between mb-8 sticky top-0 bg-iran-khaki/90 dark:bg-[#020617]/90 backdrop-blur-md py-4 z-10 border-b border-transparent dark:border-transparent">
        <button className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
          <SlidersHorizontal size={20} />
        </button>
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="px-6 flex items-center gap-5 mb-8">
        <div className={`w-16 h-16 rounded-[18px] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm flex items-center justify-center shrink-0`}>
            <category.icon size={32} className={`${category.color.split(' ')[0]}`} />
        </div>
        <div>
            <h2 className="font-black text-[22px] text-slate-800 dark:text-white tracking-tight mb-1">{category.title}</h2>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">بهترین وب‌سایت‌ها و ابزارهای موضوع: {category.title}</p>
        </div>
      </div>

      <div className="px-6 flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">
        <button className="px-5 py-2 bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[12px] font-bold whitespace-nowrap shadow-sm">همه</button>
        <button className="px-5 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-xl text-[12px] font-medium whitespace-nowrap active:scale-95 transition-all">محبوب‌ترین</button>
        <button className="px-5 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-xl text-[12px] font-medium whitespace-nowrap active:scale-95 transition-all">جدیدترین</button>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6">
        {SITES.map(site => (
          <div key={site.id} onClick={() => onSiteClick(site)} className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm rounded-2xl p-5 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-md transition-all active:scale-[0.98]">
            <div className={`w-14 h-14 rounded-[14px] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[28px] mb-1 font-black ${site.logoColor}`}>
              {site.logo}
            </div>
            
            <div className="flex-1 w-full">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[14px] mb-1">{site.name}</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-1 line-clamp-2">{site.desc}</p>
            </div>
            
            <div className="mt-2 text-[10px] font-bold text-iran-blue dark:text-sky-400 bg-iran-blue/10 dark:bg-sky-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                {site.tags?.[0] || 'وب‌سایت'}
            </div>

            <div className="w-full flex justify-between items-center mt-3 pt-3 border-t border-slate-50 dark:border-slate-800/50">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <ShieldCheck size={14} className="text-iran-teal dark:text-teal-400" /> {site.rate}
              </span>
              <button className="text-slate-300 dark:text-slate-600 hover:text-iran-blue dark:hover:text-sky-400 transition-colors">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteDetail({ site, onBack }: any) {
  const [tab, setTab] = useState('about');
  return (
    <div className="pb-12 animate-in slide-in-from-bottom-8 duration-300">
      <div className="px-6 pt-4 flex items-center justify-between mb-8 sticky top-0 bg-iran-khaki/90 dark:bg-[#020617]/90 backdrop-blur-md py-4 z-10">
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
             <SlidersHorizontal size={20} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
             <Bookmark size={20} />
          </button>
        </div>
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="px-6 flex flex-col items-center text-center mx-auto max-w-[280px]">
        <div className={`w-24 h-24 rounded-[20px] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm flex items-center justify-center text-[48px] mb-6 font-black ${site.logoColor}`}>
          {site.logo}
        </div>
        <h2 className="text-[24px] font-black text-slate-800 dark:text-white flex items-center gap-2 justify-center tracking-tight mb-1">
          {site.name} <ShieldCheck size={22} className="text-iran-blue dark:text-sky-400" strokeWidth={2.5} />
        </h2>
        <div className="text-iran-blue dark:text-sky-400 font-bold text-[13px] mb-3">{site.url}</div>
        <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{site.desc}</p>
        
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-[12px] font-bold mb-8">
            <ShieldCheck size={18} className="text-iran-teal dark:text-teal-400" /> تضمین کیفیت: {site.rate} رضایت
        </div>
      </div>

      <div className="px-6 mb-6">
        <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-[14px] p-1.5 flex gap-1 border border-slate-100 dark:border-slate-800/50">
          <button onClick={()=>setTab('about')} className={`flex-1 py-2 text-[12px] font-bold rounded-xl transition-all ${tab==='about' ? 'bg-white dark:bg-[#0f172a] text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}>معرفی</button>
          <button onClick={()=>setTab('learn')} className={`flex-1 py-2 text-[12px] font-bold rounded-xl transition-all ${tab==='learn' ? 'bg-white dark:bg-[#0f172a] text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}>آموزش‌ها</button>
          <button onClick={()=>setTab('comments')} className={`flex-1 py-2 text-[12px] font-bold rounded-xl transition-all ${tab==='comments' ? 'bg-white dark:bg-[#0f172a] text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}>نظرات</button>
        </div>
      </div>

      {tab === 'about' && (
        <div className="px-6 space-y-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-100 dark:border-slate-800/50 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-[15px]">معرفی جامع {site.name}</h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {site.name} یکی از پیشروترین پلتفرم‌های جهان در حوزه فعالیت خود است. هدف اصلی این سرویس بهبود فرآیندها و ارائه راهکارهای نوین است. با استفاده از این ابزار، کاربران می‌توانند با اطمینان کامل به تکنولوژی‌های روز دسترسی داشته و از کیفیت خدمات بهره‌مند شوند.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-100 dark:border-slate-800/50 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-5 text-[15px]">ویژگی‌های کلیدی</h3>
            <div className="space-y-4">
              {[
                  { title: 'عملکرد سریع', desc: 'پردازش قدرتمند', icon: Cpu, color: 'text-iran-teal dark:text-teal-400', bg: 'bg-iran-teal/10 dark:bg-teal-400/10' },
                  { title: 'رابط کاربری پیشرفته', desc: 'دسترسی منعطف', icon: Code, color: 'text-iran-blue dark:text-sky-400', bg: 'bg-iran-blue/10 dark:bg-sky-400/10' },
                  { title: 'طراحی نوین', desc: 'محیط جذاب بصری', icon: PenTool, color: 'text-iran-red dark:text-rose-400', bg: 'bg-iran-red/10 dark:bg-rose-400/10' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] text-slate-800 dark:text-slate-200 mb-0.5">{item.title}</h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'learn' && (
        <div className="px-6 space-y-4 animate-in fade-in duration-300">
             <div className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm rounded-2xl p-4 flex flex-col justify-center cursor-pointer active:scale-[0.99] transition-transform group hover:bg-slate-50 dark:hover:bg-[#1e293b]">
                 <div className="w-full h-36 bg-slate-100 dark:bg-slate-800/50 rounded-[14px] flex items-center justify-center text-slate-300 dark:text-slate-700 relative overflow-hidden mb-3 border border-slate-200 dark:border-slate-800/80">
                     <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0f172a] shadow-sm flex items-center justify-center text-slate-800 dark:text-white group-hover:scale-110 transition-transform">
                         <PlayCircle size={24} />
                     </div>
                 </div>
                 <h4 className="font-bold text-[14px] text-slate-800 dark:text-slate-100 px-1 mb-1">آموزش محیط کاربری {site.name}</h4>
                 <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium px-1">ویدیو آموزشی - ۳ دقیقه</p>
             </div>
             
             <div className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm rounded-2xl p-5 flex items-center gap-4 cursor-pointer active:scale-[0.99] transition-transform hover:bg-slate-50 dark:hover:bg-[#1e293b]">
                 <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-[14px] flex items-center justify-center text-iran-blue dark:text-sky-400 shrink-0">
                     <BookOpen size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-[14px] text-slate-800 dark:text-slate-100 mb-1">راهنمای قدم به قدم</h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">خواندن مقالات تخصصی</p>
                 </div>
             </div>
        </div>
      )}

      {tab === 'comments' && (
        <div className="px-6 space-y-4 animate-in fade-in duration-300">
            {[
                { name: 'علی رضایی', role: 'کاربر', comment: 'رابط کاربری سایت عالیه و کار رو راحت کرده، خیلی روون و سریعه.', rate: 5 },
                { name: 'سارا احمدی', role: 'کاربر', comment: 'از نظر ظاهری فوق‌العاده‌ست. خیلی به دلم نشست.', rate: 5 },
                { name: 'محمد کریمی', role: 'کاربر', comment: 'بخشی از امکانات هنوز جای کار دارن ولی در کل ابزار مفیدیه.', rate: 4 }
            ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800/50 shadow-sm rounded-2xl p-5">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-[14px] flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-[14px]">
                                {c.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-[14px] text-slate-800 dark:text-slate-200">{c.name}</h4>
                                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{c.role}</span>
                            </div>
                        </div>
                        <div className="flex text-amber-400">
                            {[1,2,3,4,5].map(star => (
                                <svg key={star} className="w-3.5 h-3.5" fill={star <= c.rate ? 'currentColor' : 'transparent'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2">{c.comment}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}
