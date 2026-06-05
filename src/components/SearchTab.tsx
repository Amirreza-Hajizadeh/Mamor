import React, { useState } from 'react';
import { Search, Sparkles, SlidersHorizontal, ChevronDown, Check, Globe, MonitorPlay, MessageSquareText, Lightbulb, Bookmark, Network, FileOutput, Server, Send } from 'lucide-react';

export default function SearchTab() {
  const [activeSubTab, setActiveSubTab] = useState<'ai' | 'explore'>('ai');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApi, setSelectedApi] = useState('gemini');
  
  const STORIES = [
    { name: 'noob.barbi', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { name: 'JafarNews', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
    { name: 'Anusha', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80' },
    { name: 'Celebrity', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="pb-10 animate-in fade-in duration-200 flex flex-col h-full h-min-screen">
      
      {/* Sub-tab Navigation */}
      <div className="px-5 md:px-8 pt-4 pb-2 border-b border-slate-200 dark:border-white/5 pb-0 flex gap-4 sticky top-0 bg-slate-50/90 dark:bg-[#0f0f13]/90 backdrop-blur-md z-10 hidden">
        {/* We can hide this or keep it if needed, let's just make it a unified view or toggle */}
      </div>
      
      <div className="px-5 md:px-8 pt-4 pb-3 flex justify-between items-center bg-slate-50 dark:bg-[#0f0f13] sticky top-0 z-10 border-b border-slate-200/50 dark:border-white/5">
         <div className="flex bg-slate-200/50 dark:bg-white/5 rounded-full p-1 gap-1">
            <button 
              onClick={() => setActiveSubTab('ai')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${activeSubTab === 'ai' ? 'bg-white dark:bg-slate-800 text-iran-blue dark:text-purple-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              هوش مصنوعی
            </button>
            <button 
              onClick={() => setActiveSubTab('explore')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${activeSubTab === 'explore' ? 'bg-white dark:bg-slate-800 text-iran-blue dark:text-purple-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              دیگر
            </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {activeSubTab === 'ai' ? (
          <div className="px-5 md:px-8 py-4 md:py-8 flex flex-col gap-6 max-w-4xl mx-auto">
             
             {/* AI Search Header */}
             <div className="flex flex-col gap-2 items-center text-center mt-2 mb-4">
                <div className="w-14 h-14 bg-iran-blue/10 dark:bg-purple-500/20 text-iran-blue dark:text-purple-400 rounded-2xl flex items-center justify-center mb-1">
                    <Sparkles size={28} />
                </div>
                <h2 className="text-[22px] md:text-[28px] font-black text-slate-800 dark:text-white tracking-tight">جستجو و خلاصه‌ساز AI</h2>
                <p className="text-[13px] md:text-[15px] text-slate-500 dark:text-[#7a7a8c]">پاسخ‌های هوشمند، ترسیم نقشه ذهنی و ارتباط با برترین مدل‌ها</p>
             </div>

             {/* API Selector */}
             <div className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/5 rounded-[20px] p-2 flex gap-2">
                <button 
                  onClick={() => setSelectedApi('gemini')}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 rounded-[14px] transition-all ${selectedApi === 'gemini' ? 'bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                >
                    <Server size={20} />
                    <span className="text-[11px] font-bold">Gemini Pro</span>
                </button>
                <button 
                  onClick={() => setSelectedApi('openai')}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 rounded-[14px] transition-all ${selectedApi === 'openai' ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                >
                    <Server size={20} />
                    <span className="text-[11px] font-bold">GPT-4o</span>
                </button>
                <button 
                  onClick={() => setSelectedApi('claude')}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 rounded-[14px] transition-all ${selectedApi === 'claude' ? 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                >
                    <Server size={20} />
                    <span className="text-[11px] font-bold">Claude 3.5</span>
                </button>
             </div>

             {/* Action Blocks */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[20px] p-5 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
                    <Network size={28} className="text-white/80" />
                    <span className="font-bold text-[15px] mt-2">تولید نقشه ذهنی</span>
                    <span className="text-[11px] text-white/70">ایجاد مایندمپ از متون</span>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[20px] p-5 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
                    <FileOutput size={28} className="text-white/80" />
                    <span className="font-bold text-[15px] mt-2">خلاصه‌ساز لینک</span>
                    <span className="text-[11px] text-white/70">تحلیل محتوای سایت</span>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-[20px] p-5 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.02] active:scale-95 md:flex hidden">
                    <Lightbulb size={28} className="text-white/80" />
                    <span className="font-bold text-[15px] mt-2">ایده‌پردازی</span>
                    <span className="text-[11px] text-white/70">بارش فکری هوشمند</span>
                </div>
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-[20px] p-5 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.02] active:scale-95 md:flex hidden">
                    <MessageSquareText size={28} className="text-white/80" />
                    <span className="font-bold text-[15px] mt-2">ترجمه متن</span>
                    <span className="text-[11px] text-white/70">ترجمه دقیق با هوش مصنوعی</span>
                </div>
             </div>

             {/* Search Input */}
             <form onSubmit={(e) => { e.preventDefault(); if(searchQuery.trim()) console.log('Searching...'); }} className="relative mt-4">
                <textarea 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="موضوع جستجو یا لینک خود را اینجا قرار دهید..."
                  className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/10 rounded-[24px] rounded-br-[8px] pl-16 pr-6 pt-5 pb-16 text-[14px] text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-iran-blue dark:focus:border-purple-500 focus:ring-1 focus:ring-iran-blue dark:focus:ring-purple-500 resize-none h-[140px] shadow-sm"
                  dir="rtl"
                />
                
                {/* Search Engine Selector embedded in search bar */}
                <div className="absolute right-4 bottom-4 flex items-center bg-slate-100 dark:bg-white/5 rounded-xl text-slate-500 dark:text-slate-400 px-2 py-1.5 gap-1.5">
                    <Globe size={14} />
                    <select className="bg-transparent text-[11px] font-medium outline-none appearance-none pr-1 pl-4 cursor-pointer">
                        <option value="google">گوگل</option>
                        <option value="bing">بینگ</option>
                        <option value="duckduckgo">داک‌داک‌گو</option>
                        <option value="scholar">گوگل اسکالر</option>
                    </select>
                    <ChevronDown size={14} className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                </div>

                <button type="submit" className="absolute left-4 bottom-4 w-12 h-12 bg-iran-blue dark:bg-purple-600 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <Send size={20} className="translate-x-px translate-y-px" />
                </button>
             </form>
             
             {/* AI Mock Output Area (Show when searched) */}
             {searchQuery.length > 3 && (
               <div className="bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/5 rounded-[24px] p-5 mt-4 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 shadow-sm flex flex-col gap-4">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <div className="flex items-center gap-3 relative z-10">
                   <div className="w-10 h-10 rounded-[14px] bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                     <Sparkles size={20} />
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[14px] font-black text-slate-800 dark:text-white">پاسخ هوشمند جویشگر ({selectedApi === 'gemini' ? 'Gemini Pro' : selectedApi === 'openai' ? 'GPT-4o' : 'Claude 3.5'})</span>
                       <span className="text-[11px] text-slate-500 pt-0.5">در حال تولید اینفوگرافی و دیاگرام درختی...</span>
                   </div>
                 </div>
                 
                 <div className="relative z-10 border border-slate-100 dark:border-white/5 rounded-[16px] px-4 py-5 bg-slate-50 dark:bg-[#13131a]">
                     <div className="flex flex-col items-center gap-3 mx-auto relative">
                         {/* Root Node */}
                         <div className="bg-white dark:bg-[#1f1f2e] border-2 border-indigo-400 dark:border-indigo-500 rounded-xl px-4 py-2 font-bold text-[13px] text-slate-800 dark:text-white shadow-sm z-10">
                             {searchQuery.substring(0, 20) || 'موضوع اصلی جستجو'}
                         </div>
                         
                         {/* Connecting Line */}
                         <div className="w-0.5 h-6 bg-indigo-200 dark:bg-indigo-500/30 -my-1 z-0"></div>
                         
                         {/* Branches Container */}
                         <div className="flex justify-center gap-2 md:gap-8 w-full border-t-2 border-indigo-200 dark:border-indigo-500/30 pt-4 relative px-2">
                             
                             {/* Branch 1 */}
                             <div className="flex flex-col items-center relative flex-1">
                                 <div className="absolute top-[-16px] w-full border-t-2 border-indigo-200 dark:border-indigo-500/30 hidden"></div>
                                 <div className="absolute top-[-16px] h-4 w-0.5 bg-indigo-200 dark:bg-indigo-500/30"></div>
                                 <div className="bg-white dark:bg-[#1f1f2e] border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-center shadow-sm w-full">
                                     <h5 className="font-bold text-[11px] text-slate-800 dark:text-white mb-1">تعریف کلی</h5>
                                     <span className="text-[9px] text-slate-500 leading-relaxed block">مفاهیم پایه‌ای و ابتدایی موضوع.</span>
                                 </div>
                             </div>
                             
                             {/* Branch 2 */}
                             <div className="flex flex-col items-center relative flex-1">
                                 <div className="absolute top-[-16px] h-4 w-0.5 bg-indigo-200 dark:bg-indigo-500/30"></div>
                                 <div className="bg-white dark:bg-[#1f1f2e] border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-center shadow-sm w-full">
                                     <h5 className="font-bold text-[11px] text-slate-800 dark:text-white mb-1">ویژگی‌ها</h5>
                                     <span className="text-[9px] text-slate-500 leading-relaxed block">بررسی مشخصه‌های کلیدی و کاربردها.</span>
                                 </div>
                             </div>

                             {/* Branch 3 */}
                             <div className="flex flex-col items-center relative flex-1">
                                 <div className="absolute top-[-16px] h-4 w-0.5 bg-indigo-200 dark:bg-indigo-500/30"></div>
                                 <div className="bg-white dark:bg-[#1f1f2e] border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-center shadow-sm w-full">
                                     <h5 className="font-bold text-[11px] text-slate-800 dark:text-white mb-1">ارتباطات</h5>
                                     <span className="text-[9px] text-slate-500 leading-relaxed block">ارتباط با سایر علوم و زمینه‌ها.</span>
                                 </div>
                             </div>

                         </div>
                     </div>
                 </div>

                 <div className="relative z-10 text-[13px] text-slate-600 dark:text-slate-300 leading-loose border-r-2 border-indigo-500 pr-3 mt-2">
                   درحال جستجو و پردازش درخواست شما. 
                   <br/>
                   داده‌ها در حال طبقه‌بندی و انتقال به نمودار درختی (اینفوگرافی) هستند. لطفاً شکیبا باشید...
                 </div>
               </div>
             )}
             
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-200 max-w-5xl mx-auto">
            {/* Explore content logic here, recovering old items */}
            <div className="px-5 md:px-8 pt-4 pb-4">
                {/* Stories / Circular Avatar row */}
                <div className="flex items-center gap-5 overflow-x-auto no-scrollbar pb-2">
                    {STORIES.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 cursor-pointer shrink-0 group">
                            <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] rounded-full p-[2px] bg-gradient-to-tr from-iran-blue to-iran-red dark:from-purple-500 dark:to-rose-500 shadow-sm">
                                <div className="w-full h-full rounded-full border-2 border-white dark:border-[#13131a] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <span className="text-[12px] md:text-[13px] text-slate-600 dark:text-[#7a7a8c] font-medium truncate max-w-[80px] text-center">{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-white/5 my-2"></div>

            {/* Feed Area */}
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:px-8 md:py-4">
                <div className="px-5 py-5 md:rounded-2xl md:bg-white dark:md:bg-[#1a1a24] border-b md:border border-slate-200 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#20202a] transition-colors shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-white/10">
                                <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=100&q=80" alt="UFC" loading="lazy" />
                            </div>
                            <span className="text-[14px] font-bold text-slate-800 dark:text-white">UFC</span>
                        </div>
                        <Bookmark size={18} className="text-slate-400 dark:text-[#7a7a8c]" />
                    </div>
                    <p className="text-[14px] text-slate-800 dark:text-white font-medium text-right mb-4 leading-relaxed px-1">
                        لایو مسابقه‌های مهم‌رو میذارم براتون اگه پیشنهادی هم برای فعالیت اکانت دارین ممنون میشم بگین🤔🔥
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-slate-400 dark:text-[#7a7a8c]">
                        <span>15:41 • 29 Ordibehesht</span>
                        <div className="flex gap-3 mr-auto">
                            <span className="flex items-center gap-1">🔥 1</span>
                            <span className="flex items-center gap-1"><MessageSquareText size={14} /> 0</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
