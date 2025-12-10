'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, User, HeartHandshake } from 'lucide-react';

export default function SupportPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 pb-24">
      <header className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => router.back()} 
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm active:scale-95 transition-transform"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="font-semibold text-lg">Поддержка</h1>
      </header>

      <div className="space-y-6">
        <p className="text-gray-500 leading-relaxed">
          Иногда нам всем нужна рука помощи. Выберите формат, который вам сейчас ближе. Это безопасно и конфиденциально.
        </p>

        {/* Карточка Волонтера */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-green-200 transition-all group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <HeartHandshake size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Поговорить с волонтёром</h3>
          <p className="text-gray-600 text-sm mb-4">
            Человек, который сам прошёл через трудности. Он выслушает, поделится опытом и просто побудет рядом.
          </p>
          <button className="text-green-600 font-medium text-sm border-b border-green-200 pb-0.5">
            Найти собеседника →
          </button>
        </div>

        {/* Карточка Психолога */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-all group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <User size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Найти психолога</h3>
          <p className="text-gray-600 text-sm mb-4">
            Профессиональная помощь, когда нужно разобраться в причинах и найти выход из кризиса.
          </p>
          <button className="text-blue-600 font-medium text-sm border-b border-blue-200 pb-0.5">
            Выбрать специалиста →
          </button>
        </div>
      </div>
    </div>
  );
}
