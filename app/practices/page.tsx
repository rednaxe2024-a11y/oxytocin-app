'use client';

import { Sun, Moon, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function PracticesPage() {
  const categories = [
    { name: 'Утро', icon: Sun, color: 'bg-orange-100 text-orange-600' },
    { name: 'Вечер', icon: Moon, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Когда тяжело', icon: Zap, color: 'bg-gray-100 text-gray-600' },
    { name: 'Хочу тепла', icon: Heart, color: 'bg-pink-100 text-pink-600' },
  ];

  const practices = [
    { title: 'Три благодарности', cat: 'Вечер', time: '5 мин' },
    { title: 'Глаза в глаза', cat: 'Хочу тепла', time: '2 мин' },
    { title: 'Пауза перед ответом', cat: 'Когда тяжело', time: '1 мин' },
    { title: 'Доброе намерение', cat: 'Утро', time: '3 мин' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 pb-24">
      <h1 className="text-xl font-bold mb-6">Практики и ритуалы</h1>
      
      {/* Категории */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button key={i} className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full whitespace-nowrap shadow-sm active:scale-95 transition-transform">
              <Icon size={16} className={cat.color.split(' ')[1]} />
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          )
        })}
      </div>

      {/* Список */}
      <div className="grid grid-cols-1 gap-4">
        {practices.map((p, i) => (
          <Link key={i} href="/task" className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors group">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-md">
                {p.cat}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                ⏱ {p.time}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-[#4A403A] group-hover:text-[var(--primary)] transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">Нажмите, чтобы начать...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
