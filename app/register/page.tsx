'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import clsx from 'clsx';

export default function RegisterPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    status: 'relationship', // relationship, marriage, dating
    type: 'unknown'
  });

  const marriageTypes = [
    { id: 'spiritual', label: 'Духовный', desc: 'Единство ценностей и миссии' },
    { id: 'vector', label: 'Векторный', desc: 'Яркие эмоции и страсть' },
    { id: 'patriarchal', label: 'Патриархальный', desc: 'Традиции и четкие роли' },
    { id: 'romantic', label: 'Романтический', desc: 'Нежность и внимание' },
    { id: 'partner', label: 'Партнёрский', desc: 'Равенство и договоренности' },
    { id: 'unknown', label: 'Пока не знаю', desc: 'Хочу разобраться' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка на сервер
    // Сейчас просто сохраняем в локальное хранилище для демо
    localStorage.setItem('user_name', formData.name || 'Друг');
    localStorage.setItem('marriage_type', formData.type);
    
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 pb-10">
      <div className="max-w-md mx-auto">
        
        {/* Шапка */}
        <header className="flex items-center gap-4 mb-8 pt-4">
          <button onClick={() => router.back()} className="text-[var(--text-muted)] hover:text-[var(--foreground)]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">Ваш профиль</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Имя */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Как вас называть?
            </label>
            <input 
              type="text"
              placeholder="Ваше имя"
              className="w-full bg-white border border-[#EBE0D6] rounded-xl p-4 text-lg outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-orange-100 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          {/* Статус */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Ваш статус
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'dating', text: 'Начало' },
                { id: 'relationship', text: 'Пара' },
                { id: 'marriage', text: 'В браке' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormData({...formData, status: opt.id})}
                  className={clsx(
                    "py-3 px-2 rounded-lg text-sm font-medium transition-all border",
                    formData.status === opt.id 
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md" 
                      : "bg-white text-[var(--foreground)] border-[#EBE0D6] hover:bg-orange-50"
                  )}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          {/* Тип брака */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Тип союза (по ощущениям)
            </label>
            <div className="grid grid-cols-1 gap-3">
              {marriageTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({...formData, type: type.id})}
                  className={clsx(
                    "relative p-4 rounded-xl text-left border transition-all flex items-center justify-between group",
                    formData.type === type.id
                      ? "bg-white border-[var(--primary)] ring-1 ring-[var(--primary)]"
                      : "bg-white border-[#EBE0D6] hover:border-[var(--primary-hover)]"
                  )}
                >
                  <div>
                    <div className={clsx("font-medium", formData.type === type.id ? "text-[var(--primary)]" : "text-[var(--foreground)]")}>
                      {type.label}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">{type.desc}</div>
                  </div>
                  
                  {/* Радио-кнопка визуализация */}
                  <div className={clsx(
                    "w-5 h-5 rounded-full border flex items-center justify-center",
                    formData.type === type.id ? "border-[var(--primary)]" : "border-gray-300"
                  )}>
                    {formData.type === type.id && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Кнопка Далее */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-orange-100 active:scale-[0.98]"
            >
              Создать профиль
            </button>
            <p className="text-center text-xs text-[var(--text-muted)] mt-4">
              Ваши данные хранятся только на этом устройстве
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
