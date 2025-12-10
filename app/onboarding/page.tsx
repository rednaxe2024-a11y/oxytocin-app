'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Пространство для бережных отношений",
      desc: "Приложение поможет вам стать ближе, слышать и поддерживать друг друга.",
      icon: Heart,
      color: "text-rose-400",
      bg: "bg-rose-50"
    },
    {
      title: "Маленькие ритуалы каждый день",
      desc: "Получайте простые задания, которые напомнят о важном и вернут тепло.",
      icon: Sparkles,
      color: "text-amber-400",
      bg: "bg-amber-50"
    },
    {
      title: "Поддержка, когда трудно",
      desc: "Если вы запутались, можно поговорить с опытным волонтёром или найти психолога.",
      icon: Shield,
      color: "text-emerald-400",
      bg: "bg-emerald-50"
    },
    {
      title: "Для любых союзов",
      desc: "Духовный, векторный, партнерский или романтический — мы уважаем ваш уникальный путь.",
      icon: Heart, // Повторяем иконку или можно другую
      color: "text-[var(--primary)]",
      bg: "bg-orange-50"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/register');
    }
  };

  const CurrentIcon = steps[step].icon;

  return (
    <div className="flex flex-col h-screen bg-white relative overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-[var(--accent)] opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-48 h-48 rounded-full bg-[var(--secondary)] opacity-30 blur-3xl pointer-events-none" />

      {/* Контент */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center z-10">
        
        {/* Иллюстрация (иконка в круге) */}
        <div className={clsx(
          "w-40 h-40 rounded-full flex items-center justify-center mb-10 transition-colors duration-500",
          steps[step].bg
        )}>
          <CurrentIcon size={64} className={clsx("transition-colors duration-500", steps[step].color)} />
        </div>

        {/* Текст */}
        <h1 className="text-2xl font-bold mb-4 text-[var(--foreground)] transition-opacity duration-300">
          {steps[step].title}
        </h1>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xs transition-opacity duration-300">
          {steps[step].desc}
        </p>

        {/* Индикаторы шагов */}
        <div className="flex gap-2 mt-8">
          {steps.map((_, i) => (
            <div 
              key={i}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                i === step ? "w-8 bg-[var(--primary)]" : "w-2 bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Кнопка внизу */}
      <div className="p-8 pb-12 z-10">
        <button
          onClick={handleNext}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-orange-100"
        >
          {step === steps.length - 1 ? "Начать путь" : "Далее"}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
