'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Smile, Frown, Meh, Sun, Moon, Download } from 'lucide-react';
import clsx from 'clsx';

export default function HomePage() {
  const [userName, setUserName] = useState('Друг');
  const [mood, setMood] = useState<number | null>(null);
  // Исправленная строка, чтобы Vercel не ругался
  const [deferredPrompt, setDeferredPrompt] = useState(null as any);
  const [showInstallButton, setShowInstallButton] = useState(false);
  
  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    if (savedName) setUserName(savedName);

    // Исправленный тип события
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };
    
    window.addEventListener('beforeinstallprompt', handler);
    
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstallButton(false);
    }
    setDeferredPrompt(null);
  };

  const moods = [
    { value: 1, icon: Frown, color: 'text-rose-400', label: 'Тяжело' },
    { value: 2, icon: Meh, color: 'text-orange-400', label: 'Так себе' },
    { value: 3, icon: Smile, color: 'text-yellow-400', label: 'Нормально' },
    { value: 4, icon: Sun, color: 'text-lime-500', label: 'Хорошо' },
    { value: 5, icon: Heart, color: 'text-pink-500', label: 'Отлично' },
  ];

  return (
    <div className="pb-24 pt-8 px-6 space-y-8 animate-in fade-in duration-500">
      
      {/* Приветствие */}
      <header>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Привет, {userName}
        </h1>
        <p className="text-[var(--text-muted)] mt-2">
          Сегодня можно сделать отношения чуть теплее.
        </p>
      </header>

      {/* Кнопка установки */}
      {showInstallButton && (
        <button
          onClick={handleInstallClick}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
        >
          <Download size={20} />
          Установить приложение на телефон
        </button>
      )}

      {/* Задание на сегодня */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-orange-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-2">
            Задание на сегодня
          </div>
          <h3 className="text-xl font-semibold mb-3 pr-8">
            Три слова благодарности
          </h3>
          <p className="text-sm text-gray-600 mb-6 line-clamp-2">
            Вспомните три момента за последнюю неделю, когда партнер вас порадовал...
          </p>
          
          <Link 
            href="/task"
            className="inline-flex items-center justify-center w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-medium py-3 rounded-xl transition-colors active:scale-[0.98]"
          >
            Открыть задание
          </Link>
        </div>
      </section>

      {/* Настроение */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Как ты сейчас?</h3>
        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
          {moods.map((m) => {
            const Icon = m.icon;
            const isSelected = mood === m.value;
            
            return (
              <button
                key={m.value}
                onClick={() => setMood(m.value)}
                className="flex flex-col items-center gap-1 group"
              >
                <div className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  isSelected ? "bg-gray-100 scale-110" : "hover:bg-gray-50",
                  isSelected ? m.color : "text-gray-400"
                )}>
                  <Icon size={24} strokeWidth={isSelected ? 2.5 : 2} />
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Состояние партнера */}
        <div className="mt-4 flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-dashed border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
            <Smile size={16} />
          </div>
          <span className="text-sm text-gray-500">
            Партнер пока не отметил состояние
          </span>
        </div>
      </section>

      {/* Кнопки История и Поддержка */}
      <div className="grid grid-cols-2 gap-4">
        <Link 
          href="/history"
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <div className="font-semibold">История</div>
          <div className="text-xs text-gray-400 mt-1">Наши дни</div>
        </Link>

        <Link 
          href="/support"
          className="bg-[var(--secondary)] p-5 rounded-2xl shadow-sm hover:opacity-90 transition-opacity text-white"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
            <Heart size={20} className="text-white" />
          </div>
          <div className="font-semibold">Поддержка</div>
          <div className="text-xs text-white/80 mt-1">Волонтеры и профи</div>
        </Link>
      </div>

    </div>
  );
}
