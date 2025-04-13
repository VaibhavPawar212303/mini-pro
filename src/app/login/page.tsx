// app/login/page.tsx
import { Suspense } from 'react';
import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <LoginForm />
    </Suspense>
  );
}
