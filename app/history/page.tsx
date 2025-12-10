'use client';

import { Smile, Heart, Calendar } from 'lucide-react';
import clsx from 'clsx';

export default function HistoryPage() {
  const history = [
    { date: '10 дек', mood: Smile, moodColor: 'text-yellow-400', task: 'Три слова благодарности', done: true, note: 'Было приятно увидеть улыбку' },
    { date: '09 дек', mood: Heart, moodColor: 'text-pink-500', task: 'Утренний комплимент', done: true, note: '' },
    { date: '08 дек', mood: null, moodColor: '', task: 'Прогулка без телефонов', done: false, note: '' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 pb-24">
      <h1 className="text-xl font-bold mb-6">Ваша история</h1>
      
      <div className="space-y-4">
        {history.map((day, i) => {
          const MoodIcon = day.mood || Calendar;
          return (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
              
              {/* Дата и настроение */}
              <div className="flex flex-col items-center gap-2 min-w-[50px]">
                <span className="text-xs font-bold text-gray-400 uppercase">{day.date}</span>
                <div className={clsx("w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center", day.moodColor)}>
                  <MoodIcon size={20} />
                </div>
              </div>

              {/* Задание */}
              <div className="flex-1 pt-1">
                <div className="font-medium text-[#4A403A]">{day.task}</div>
                
                {day.done ? (
                  <div className="text-xs text-green-600 font-medium mt-1 bg-green-50 inline-block px-2 py-1 rounded-lg">
                    Выполнено
                  </div>
                ) : (
                  <div className="text-xs text-gray-400 font-medium mt-1">
                    Пропущено
                  </div>
                )}
                
                {day.note && (
                  <div className="mt-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg italic">
                    "{day.note}"
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
