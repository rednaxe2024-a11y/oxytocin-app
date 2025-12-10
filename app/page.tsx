import { redirect } from 'next/navigation';

export default function Home() {
  // В прототипе мы сразу отправляем пользователя на онбординг
  redirect('/onboarding');
}
