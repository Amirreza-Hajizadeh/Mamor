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
    <div className="pb-10 animate-in fade-in duration-200 flex flex-col h-full h-[calc(100vh-140px)]">
      
      {/* Sub-tab Navigation */}
      <div className="px-5 pt-4 pb-2 border-b border-slate-200 dark:border-white/5 pb-0 flex gap-4 sticky top-0 bg-slate-50/90 dark:bg-[#0f0f13]/90 backdrop-blur-md z-10 hidden">
        {/* We can hide this or keep it if needed, let's just make it a unified view or toggle */}
      </div>
      
      <div className="px-5 pt-4 pb-3 flex justify-between items-center bg-slate-50 dark:bg-[#0f0f13] sticky top-0 z-10 border-b border-slate-200/50 dark:border-white/5">
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
              اکسپلور
            </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {activeSubTab === 'ai' ? (
          <div className="px-5 py-4 flex flex-col gap-5">
             
             {/* AI Search Header */}
             <div className="flex flex-col gap-1.5 items-center text-center mt-2 mb-2">
                <div className="w-12 h-12 bg-iran-blue/10 dark:bg-purple-500/20 text-iran-blue dark:text-purple-400 rounded-2xl flex items-center justify-center mb-1">
                    <Sparkles size={24} />
                </div>
                <h2 className="text-[20px] font-black text-slate-800 dark:text-white tracking-tight">جستجو و خلاصه‌ساز AI</h2>
                <p className="text-[12px] text-slate-500 dark:text-[#7a7a8c]">پاسخ‌های هوشمند، ترسیم نقشه ذهنی و ارتباط با برترین مدل‌ها</p>
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
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[20px] p-4 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform active:scale-95">
                    <Network size={24} className="text-white/80" />
                    <span className="font-bold text-[14px] mt-1">تولید نقشه ذهنی</span>
                    <span className="text-[10px] text-white/70">ایجاد مایندمپ از متون</span>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[20px] p-4 text-white shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-transform active:scale-95">
                    <FileOutput size={24} className="text-white/80" />
                    <span className="font-bold text-[14px] mt-1">خلاصه‌ساز لینک</span>
                    <span className="text-[10px] text-white/70">تحلیل محتوای سایت</span>
                </div>
             </div>

             {/* Search Input */}
             <form onSubmit={(e) => { e.preventDefault(); if(searchQuery.trim()) console.log('Searching...'); }} className="relative mt-2">
                <textarea 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="موضوع جستجو یا لینک خود را اینجا قرار دهید..."
                  className="w-full bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/10 rounded-[24px] rounded-br-[8px] pl-14 pr-5 py-4 text-[13px] text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-iran-blue dark:focus:border-purple-500 focus:ring-1 focus:ring-iran-blue dark:focus:ring-purple-500 resize-none h-[120px] shadow-sm"
                  dir="rtl"
                />
                <button type="submit" className="absolute left-3 bottom-3 w-10 h-10 bg-iran-blue dark:bg-purple-600 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md">
                    <Send size={18} className="translate-x-px translate-y-px" />
                </button>
             </form>
             
             {/* AI Mock Output Area (Show when searched) */}
             {searchQuery.length > 5 && (
               <div className="bg-white dark:bg-[#13131a] border border-slate-200 dark:border-white/5 rounded-[24px] p-5 mt-2 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 shadow-sm">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <div className="flex items-center gap-2 mb-4 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
                     <Sparkles size={16} className="text-indigo-500" />
                   </div>
                   <span className="text-[13px] font-bold text-slate-800 dark:text-white">پاسخ {selectedApi === 'gemini' ? 'Gemini Pro' : selectedApi === 'openai' ? 'GPT-4o' : 'Claude 3.5'}</span>
                 </div>
                 <div className="relative z-10 text-[13px] text-slate-600 dark:text-slate-300 leading-loose border-r-2 border-indigo-500 pr-3">
                   درحال جستجو و پردازش درخواست شما برای "{searchQuery.substring(0, 30)}{searchQuery.length > 30 ? '...' : ''}". 
                   <br/>
                   هوش مصنوعی در حال تحلیل اطلاعات و ارائه بهترین خلاصه یا نقشه ذهنی برای شماست...
                 </div>
               </div>
             )}
             
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-200">
            {/* Explore content logic here, recovering old items */}
            <div className="px-5 pt-2 pb-2">
                {/* Stories / Circular Avatar row */}
                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
                    {STORIES.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 cursor-pointer shrink-0 group">
                            <div className="w-[68px] h-[68px] rounded-full p-[2px] bg-gradient-to-tr from-iran-blue to-iran-red dark:from-purple-500 dark:to-rose-500 shadow-sm">
                                <div className="w-full h-full rounded-full border-2 border-white dark:border-[#13131a] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <span className="text-[11px] text-slate-600 dark:text-[#7a7a8c] font-medium truncate max-w-[70px] text-center">{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-white/5 my-2"></div>

            {/* Feed Area */}
            <div className="flex flex-col">
                <div className="px-5 py-4 border-b border-slate-200 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1a1a24] transition-colors">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-white/10">
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
