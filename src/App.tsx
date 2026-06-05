import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, LayoutDashboard, Newspaper, Bell, User, Search, X, Moon, Sun } from 'lucide-react';
import LinkDoniTab from './components/LinkDoniTab';
import SearchTab from './components/SearchTab';
import DashboardTab from './components/DashboardTab';
import FeedTab from './components/FeedTab';
import ProfileView from './components/ProfileView';

export default function App() {
  const [activeTab, setActiveTab] = useState('linkdoni');
  const [showProfile, setShowProfile] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
    <div className="flex justify-center items-center min-h-screen bg-slate-100 dark:bg-slate-900 md:p-4 relative transition-colors duration-150">
      <div className="w-full h-[100dvh] md:h-[90vh] md:max-w-6xl md:rounded-[32px] bg-slate-50 dark:bg-[#0f0f13] relative flex flex-col md:flex-row overflow-hidden shadow-2xl z-10 mx-auto transition-colors duration-150 md:border md:border-slate-200 dark:md:border-white/10 ring-1 ring-slate-900/5 dark:ring-white/5">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-[260px] border-l border-slate-200/60 dark:border-white/5 bg-white dark:bg-[#13131a] z-20 py-6 px-4">
          <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer group" onClick={() => setShowProfile(true)}>
            <div className="w-12 h-12 bg-iran-blue dark:bg-purple-600 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover scale-110 translate-y-1" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-[18px] tracking-tight text-slate-800 dark:text-white group-hover:text-iran-blue dark:group-hover:text-purple-400 transition-colors">ایران گرد</span>
              <span className="text-[12px] text-slate-500 dark:text-[#7a7a8c] flex items-center gap-1.5 font-medium mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                آنلاین
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            <SidebarItem icon={<Compass size={24} />} label="خانه" isActive={activeTab === 'linkdoni'} onClick={() => setActiveTab('linkdoni')} />
            <SidebarItem icon={<Sparkles size={24} />} label="جویشگر" isActive={activeTab === 'search'} onClick={() => setActiveTab('search')} />
            <SidebarItem icon={<LayoutDashboard size={24} />} label="داشبورد" isActive={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <SidebarItem icon={<Newspaper size={24} />} label="اکسپلور" isActive={activeTab === 'feed'} onClick={() => setActiveTab('feed')} />
          </nav>

          <div className="mt-auto bg-iran-blue/10 dark:bg-purple-500/10 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 bg-iran-blue dark:bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <Sparkles size={20} />
            </div>
            <h4 className="font-bold text-[14px] text-slate-800 dark:text-white mb-1">ارتقا به پرو</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 px-2">دسترسی نامحدود به تمامی سرویس‌ها</p>
            <button className="w-full py-2 bg-iran-blue hover:bg-iran-blue/90 dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-[12px] font-bold rounded-xl transition-colors">
              تهیه اشتراک
            </button>
          </div>
        </aside>

        <div className="flex-1 flex flex-col relative z-20 bg-slate-50 dark:bg-[#0f0f13] transition-colors overflow-hidden">
          {/* Main App Header */}
          <header className="px-5 md:px-8 py-3 md:py-5 flex justify-between items-center bg-slate-50 dark:bg-[#0f0f13] text-slate-800 dark:text-white transition-colors border-b border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-2 cursor-pointer relative md:hidden" onClick={() => setShowProfile(true)}>
              <div className="w-9 h-9 bg-iran-blue dark:bg-purple-600 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-sm overflow-hidden">
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
              <button onClick={toggleTheme} className="text-slate-500 dark:text-[#7a7a8c] hover:text-iran-blue dark:hover:text-white transition-colors">
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button className="text-slate-500 dark:text-[#7a7a8c] hover:text-iran-blue dark:hover:text-white transition-colors">
                <Search size={22} />
              </button>
              <button className="text-slate-500 dark:text-[#7a7a8c] hover:text-iran-blue dark:hover:text-white transition-colors relative">
                <Bell size={22} />
                <span className="absolute -top-1.5 -right-1.5 bg-iran-red dark:bg-purple-500 text-white text-[9px] font-bold px-1.5 py-px rounded-full shadow-sm">۲۱</span>
              </button>
            </div>
          </header>

          {/* Telegram Banner (Mobile Only) */}
          <div className="md:hidden bg-iran-blue dark:bg-[#6b47ad] text-white px-5 py-2.5 flex justify-between items-center text-[13px] font-medium transition-colors cursor-pointer active:brightness-95">
            <span className="flex items-center justify-center gap-2">کانال تلگرام «ایران گرد»</span>
            <div className="flex items-center gap-3">
              <span className="underline underline-offset-2">مشاهده</span>
              <button className="opacity-80 hover:opacity-100 p-1">
                <X size={16} />
              </button>
            </div>
          </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-20 md:pb-8 relative z-0 bg-slate-50 dark:bg-[#0f0f13] transition-colors md:px-4">
          <div className="relative z-10 max-w-5xl mx-auto">
            {renderTab()}
          </div>
        </main>

        {/* Fixed Bottom Navigation (Mobile Only) */}
        <div className="absolute bottom-0 w-full z-50 md:hidden">
          <nav className="bg-white/90 dark:bg-[#13131a]/90 backdrop-blur-md border-t border-slate-200/60 dark:border-white/5 pb-safe flex justify-between items-center transition-colors">

            <NavItem 
              icon={<Compass size={22} />} 
              label="خانه" 
              isActive={activeTab === 'linkdoni'} 
              onClick={() => setActiveTab('linkdoni')} 
            />
            <NavItem 
              icon={<Sparkles size={22} />} 
              label="جویشگر" 
              isActive={activeTab === 'search'} 
              onClick={() => setActiveTab('search')} 
            />
            <NavItem 
              icon={<LayoutDashboard size={22} />} 
              label="داشبورد" 
              isActive={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Newspaper size={22} />} 
              label="اکسپلور" 
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
    </div>
  );
}

function SidebarItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-4 transition-all w-full p-4 rounded-2xl group ${isActive ? 'bg-slate-100 dark:bg-white/5 text-iran-blue dark:text-purple-400 font-bold' : 'text-slate-500 dark:text-[#7a7a8c] hover:bg-slate-50 dark:hover:bg-white-[0.02] hover:text-slate-800 dark:hover:text-slate-300 font-medium'}`}
    >
      <div className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-200`}>
        {icon}
      </div>
      <span className={`text-[15px] tracking-tight transition-colors`}>{label}</span>
    </button>
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
