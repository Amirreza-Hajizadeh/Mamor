import React, { useState, useMemo } from 'react';
import { Bookmark, Clock, Share2, MoreHorizontal, Headphones, Columns, GripHorizontal } from 'lucide-react';

const FEED = [
  { 
      id: 1, 
      category: 'هوش مصنوعی', 
      title: 'معرفی مدل هوشمندی با قابلیت پردازش بی‌درنگ', 
      desc: 'مدلی جدید با توانایی پردازش همزمان متن، صدا و تصویر با سرعتی بی‌نظیر که تحولی در تعاملات روزمره ایجاد خواهد کرد.',
      source: 'Tech News', 
      sourceVerified: true,
      time: '۲ ساعت پیش', 
      readTime: '۴ دقیقه',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      type: 'essential',
      hasAudio: true
  },
  { 
      id: 2, 
      category: 'فناوری', 
      title: 'مک‌بوک‌های جدید، فراتر از انتظار: بررسی کامل مشخصات', 
      desc: 'نسل جدید مک‌بوک‌ها با پردازنده‌های قدرتمند معرفی شدند که برای وظایف مرتبط با هوش مصنوعی.',
      source: 'The Verge', 
      sourceVerified: false,
      time: '۵ ساعت پیش', 
      readTime: '۸ دقیقه',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      type: 'normal',
      hasAudio: false
  },
  { 
      id: 3, 
      category: 'طراحی', 
      title: 'بهترین ابزارهای طراحی رابط کاربری (UI) برای تیم‌های حرفه‌ای', 
      desc: 'از ابزارهای رایج تا سیستم‌های جدید مبتنی بر AI، به بررسی و مقایسه برترین نرم‌افزارهای طراحی.',
      source: 'Design Systems', 
      sourceVerified: false,
      time: 'دیروز', 
      readTime: '۶ دقیقه',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      type: 'interesting',
      hasAudio: false
  }
];

export default function FeedTab() {
  const [filter, setFilter] = useState<'all' | 'essential' | 'normal' | 'interesting'>('all');

  const filteredFeed = useMemo(() => {
      if (filter === 'all') return FEED;
      return FEED.filter(post => post.type === filter);
  }, [filter]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-200 pb-10">
      
      <div className="mb-2 px-5 py-2">
        <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-[20px] font-black text-slate-800 dark:text-white tracking-tight">
                مجله تخصصی
            </h2>
            {filter !== 'all' && (
                <button onClick={() => setFilter('all')} className="text-[11px] font-bold text-iran-blue dark:text-purple-500 active:scale-95 transition-transform">نمایش همه</button>
            )}
        </div>
        <div className="flex gap-2">
            <button onClick={() => setFilter('essential')} className={`flex-1 rounded-xl py-2.5 flex items-center justify-center gap-2 transition-all active:scale-95 ${filter === 'essential' ? 'bg-slate-800 text-white dark:bg-[#2a2a35] dark:text-white border-transparent shadow-md' : 'bg-white dark:bg-transparent border border-slate-200 dark:border-[#2a2a35] shadow-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#20202a]'}`}>
                <div className={`w-2 h-2 rounded-full bg-rose-500 ${filter === 'essential' ? 'shadow-[0_0_8px_rgba(244,63,94,0.8)]' : ''}`}></div>
                <span className="text-[11px] font-bold">فوری</span>
            </button>
            <button onClick={() => setFilter('normal')} className={`flex-1 rounded-xl py-2.5 flex items-center justify-center gap-2 transition-all active:scale-95 ${filter === 'normal' ? 'bg-slate-800 text-white dark:bg-[#2a2a35] dark:text-white border-transparent shadow-md' : 'bg-white dark:bg-transparent border border-slate-200 dark:border-[#2a2a35] shadow-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#20202a]'}`}>
                <div className={`w-2 h-2 rounded-full bg-blue-500 ${filter === 'normal' ? 'shadow-[0_0_8px_rgba(59,130,246,0.8)]' : ''}`}></div>
                <span className="text-[11px] font-bold">مهم</span>
            </button>
            <button onClick={() => setFilter('interesting')} className={`flex-1 rounded-xl py-2.5 flex items-center justify-center gap-2 transition-all active:scale-95 ${filter === 'interesting' ? 'bg-slate-800 text-white dark:bg-[#2a2a35] dark:text-white border-transparent shadow-md' : 'bg-white dark:bg-transparent border border-slate-200 dark:border-[#2a2a35] shadow-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#20202a]'}`}>
                <div className={`w-2 h-2 rounded-full bg-teal-500 ${filter === 'interesting' ? 'shadow-[0_0_8px_rgba(20,184,166,0.8)]' : ''}`}></div>
                <span className="text-[11px] font-bold">عمومی</span>
            </button>
        </div>
      </div>

      <div className="flex flex-col">
        {filteredFeed.map(post => (
          <div key={post.id} className="bg-transparent px-5 py-4 border-b border-slate-200/60 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1a1a24] transition-colors group">
              <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-[#2a2a35] rounded-full flex items-center justify-center text-[14px] font-black text-slate-600 dark:text-white shrink-0 border border-slate-200/50 dark:border-white/5">
                        {post.source.charAt(0)}
                    </div>
                    <div>
                        <span className="text-[14px] font-bold text-slate-800 dark:text-white block">{post.source}</span>
                        <span className="text-[11px] text-slate-500 dark:text-[#7a7a8c] font-medium">{post.time}</span>
                    </div>
                  </div>
                  <MoreHorizontal size={20} className="text-slate-400 dark:text-[#7a7a8c]" />
              </div>
              
              <h4 className="text-[15px] font-bold leading-relaxed text-slate-800 dark:text-white mb-2">{post.title}</h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3 font-medium">{post.desc}</p>
              
              {post.image ? (
                <div className="w-full h-48 rounded-[12px] overflow-hidden relative mb-3 border border-slate-200/60 dark:border-white/5 shadow-sm dark:shadow-none">
                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover relative z-10" loading="lazy" />
                    {post.hasAudio && (
                        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 z-20">
                            <Headphones size={16} />
                        </div>
                    )}
                </div>
              ) : null}

              <div className="flex justify-between items-center mt-1">
                  <span className="text-[11px] text-slate-400 dark:text-[#7a7a8c] font-medium flex items-center gap-1.5 bg-slate-100 dark:bg-[#1f1f2e] px-2.5 py-1 rounded-full">
                      {post.category}
                  </span>
                  <div className="flex gap-4 text-slate-400 dark:text-[#7a7a8c]">
                      <span className="flex items-center gap-1 text-[12px]"><Clock size={16} /> {post.readTime}</span>
                      <Share2 size={18} className="hover:text-slate-600 dark:hover:text-white transition-colors" />
                      <Bookmark size={18} className="hover:text-iran-blue dark:hover:text-purple-400 transition-colors" />
                  </div>
              </div>
          </div>
        ))}
        {filteredFeed.length === 0 && (
            <div className="text-center py-20 text-slate-400 dark:text-[#7a7a8c] text-[13px] font-medium">بخش مورد نظر در حال حاضر خالی است.</div>
        )}
      </div>
    </div>
  );
}
