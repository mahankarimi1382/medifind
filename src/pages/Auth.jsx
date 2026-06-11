import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect to citizen dashboard for now
    navigate('/citizen');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center space-x-2 space-x-reverse mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
          <span className="text-3xl font-black text-slate-900">MediFind</span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-slate-900">
          {isLogin ? 'ورود به حساب کاربری' : 'ساخت حساب جدید'}
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          یا{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            {isLogin ? 'ثبت‌نام در سامانه مدی‌فایند' : 'ورود به حساب قبلی'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200 sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <Input
                label="نام و نام خانوادگی"
                placeholder="مثلا: علی رضایی"
                required
              />
            )}

            <Input
              label="ایمیل یا شماره موبایل"
              type="text"
              placeholder="example@mail.com"
              icon={Mail}
              required
            />

            <div className="relative">
              <Input
                label="رمز عبور"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                icon={Lock}
                required
              />
              <button
                type="button"
                className="absolute left-3 top-[38px] text-slate-400 hover:text-slate-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="mr-2 block text-sm text-slate-700">
                    مرا به خاطر بسپار
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    فراموشی رمز عبور؟
                  </a>
                </div>
              </div>
            )}

            <div>
              <Button type="submit" variant="primary" className="w-full h-12 text-lg">
                {isLogin ? 'ورود' : 'ثبت‌نام'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">یا ورود با</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <span className="sr-only">Google</span>
                <img className="h-5 w-5" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <span className="sr-only">Github</span>
                <GithubIcon />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 leading-relaxed px-4">
          با ورود یا ثبت‌نام در مدی‌فایند، شما <a href="#" className="underline">قوانین و مقررات</a> و <a href="#" className="underline">سیاست حریم خصوصی</a> ما را می‌پذیرید.
        </p>
      </div>
    </div>
  );
};

export default Auth;
