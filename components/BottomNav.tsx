'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, BookOpen, UserRound } from 'lucide-react';
import clsx from 'clsx';

export default function BottomNav() {
  const pathname = usePathname();

  // Скрываем меню на страницах онбординга и регистрации
  if (pathname === '/onboarding' || pathname === '/register' || pathname === '/') {
    // Примечание: пока скрываем и на главной '/', так как там будет редирект на онбординг, 
    // но позже настроим логику точнее.
    // Если мы уже внутри приложения, меню будет видно.
    // Давай пока оставим проверку простой:
  }
  
  // Список ссылок меню
  const navItems = [
    { name: 'Дом', href: '/home', icon: Home },
    { name: 'Практики', href: '/practices', icon: Heart },
    { name: 'История', href: '/history', icon: BookOpen },
    { name: 'Поддержка', href: '/support', icon: UserRound }, // Используем иконку человека для поддержки
  ];

  // Не показываем меню на стартовых экранах (показухаем только внутри разделов)
  const isHidden = ['/', '/onboarding', '/register'].includes(pathname);

  if (isHidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F0E6DD] px-6 py-3 pb-6 safe-area-bottom z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <Icon 
                size={24} 
                className={clsx(
                  "transition-colors duration-200",
                  isActive ? "text-[var(--primary)]" : "text-[var(--text-muted)]"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={clsx(
                "text-[10px] font-medium transition-colors duration-200",
                isActive ? "text-[var(--primary)]" : "text-[var(--text-muted)]"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
