'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, Heart } from 'lucide-react';
import clsx from 'clsx';

export default function TaskPage() {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    // Имитация задержки перед возвратом, чтобы пользователь порадовался
    setTimeout(() => {
      // Можно было бы вернуться назад, но оставим выбор за пользователем
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 pb-24">
      {/* Шапка */}
      <header className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => router.back()} 
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm active:scale-95 transition-transform"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="font-semibold text-lg">Задание на сегодня</div>
      </header>

      {/* Карточка задания */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 mb-8 relative overflow-hidden">
        
        {/* Декор */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-2xl opacity-50" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-orange-400 font-medium text-sm mb-4">
            <Clock size={16} />
            <span>5-10 минут</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-4 text-[#4A403A]">
            Три слова благодарности
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            В суете будней мы часто забываем говорить "спасибо" за мелочи. Сегодняшняя практика направлена на то, чтобы заметить заботу партнера.
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Что нужно сделать:</h3>
            <ul className="space-y-4">
              {[
                "Вспомните 3 момента за неделю, когда партнер вас порадовал.",
                "Найдите время, когда вы оба спокойны (не на бегу).",
                "Скажите эти благодарности, глядя в глаза."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Кнопка действия */}
      <button
        onClick={handleComplete}
        disabled={completed}
        className={clsx(
          "w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-500 shadow-lg",
          completed 
            ? "bg-green-100 text-green-700 shadow-none scale-[0.98]" 
            : "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-orange-100 active:scale-[0.98]"
        )}
      >
        {completed ? (
          <>
            <CheckCircle2 size={24} />
            <span>Выполнено! Вы супер.</span>
          </>
        ) : (
          <>
            <Heart size={20} />
            <span>Я выполнил(а) задание</span>
          </>
        )}
      </button>

      {/* Анимация конфетти при успехе (упрощенная) */}
      {completed && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
           <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}

    </div>
  );
}
