import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, LayoutDashboard, Newspaper, Bell, User, Search, X } from 'lucide-react';
import LinkDoniTab from './components/LinkDoniTab';
import SearchTab from './components/SearchTab';
import DashboardTab from './components/DashboardTab';
import FeedTab from './components/FeedTab';
import ProfileView from './components/ProfileView';

export default function App() {
  const [activeTab, setActiveTab] = useState('linkdoni');
  const [showProfile, setShowProfile] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderTab = () => {
    switch (activeTab) {
      case 'linkdoni': return <LinkDoniTab />;
      case 'search': return <SearchTab />;
      case 'dashboard': return <DashboardTab />;
      case 'feed': return <FeedTab />;
      default: return <LinkDoniTab />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-slate-900 sm:p-4 relative transition-colors duration-150">
      <div className="w-full max-w-[420px] h-[100dvh] bg-slate-50 dark:bg-[#0f0f13] relative flex flex-col overflow-hidden shadow-2xl z-10 mx-auto transition-colors duration-150">
        
        <div className="flex flex-col relative z-20 bg-slate-50 dark:bg-[#0f0f13] transition-colors">
          {/* Main App Header */}
          <header className="px-5 py-3 flex justify-between items-center bg-slate-50 dark:bg-[#0f0f13] text-slate-800 dark:text-white transition-colors border-b border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-2 cursor-pointer relative" onClick={() => setShowProfile(true)}>
              <div className="w-8 h-8 bg-iran-blue dark:bg-purple-600 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover scale-110 translate-y-1" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold text-[15px] tracking-tight">ایران گرد</span>
                <span className="text-[10px] text-slate-500 dark:text-[#7a7a8c] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  آنلاین
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-slate-500 dark:text-[#7a7a8c] hover:text-iran-blue dark:hover:text-white transition-colors">
                <Search size={22} />
              </button>
              <button className="text-slate-500 dark:text-[#7a7a8c] hover:text-iran-blue dark:hover:text-white transition-colors relative">
                <Bell size={22} />
                <span className="absolute -top-1.5 -right-1.5 bg-iran-red dark:bg-purple-500 text-white text-[9px] font-bold px-1.5 py-px rounded-full shadow-sm">۲۱</span>
              </button>
            </div>
          </header>

          {/* Telegram Banner */}
          <div className="bg-iran-blue dark:bg-[#6b47ad] text-white px-5 py-2.5 flex justify-between items-center text-[13px] font-medium transition-colors cursor-pointer active:brightness-95">
            <span className="flex items-center justify-center gap-2">کانال تلگرام «ایران گرد»</span>
            <div className="flex items-center gap-3">
              <span className="underline underline-offset-2">مشاهده</span>
              <button className="opacity-80 hover:opacity-100 p-1">
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-16 relative z-0 bg-slate-50 dark:bg-[#0f0f13] transition-colors">
          <div className="relative z-10">
            {renderTab()}
          </div>
        </main>

        {/* Fixed Bottom Navigation */}
        <div className="absolute bottom-0 w-full z-50">
          <nav className="bg-white dark:bg-[#13131a] border-t border-slate-200/60 dark:border-white/5 pb-safe flex justify-between items-center transition-colors">

            <NavItem 
              icon={<Compass size={22} />} 
              label="خانه" 
              isActive={activeTab === 'linkdoni'} 
              onClick={() => setActiveTab('linkdoni')} 
            />
            <NavItem 
              icon={<Sparkles size={22} />} 
              label="اکسپلور" 
              isActive={activeTab === 'search'} 
              onClick={() => setActiveTab('search')} 
            />
            <NavItem 
              icon={<LayoutDashboard size={22} />} 
              label="سرویس‌ها" 
              isActive={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Newspaper size={22} />} 
              label="چت‌ها" 
              isActive={activeTab === 'feed'} 
              onClick={() => setActiveTab('feed')} 
            />
          </nav>
        </div>

        {/* Profile Modal */}
        {showProfile && (
           <ProfileView onClose={() => setShowProfile(false)} toggleTheme={toggleTheme} isDark={isDark} />
        )}
      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-1.5 transition-all group active:scale-95 py-3 ${isActive ? 'text-iran-blue dark:text-purple-500' : 'text-slate-400 dark:text-[#7a7a8c]'}`}
    >
      <div className={`transition-all duration-150`}>
        {icon}
      </div>
      <span className={`text-[10px] font-medium tracking-tight transition-colors`}>{label}</span>
    </button>
  );
}
