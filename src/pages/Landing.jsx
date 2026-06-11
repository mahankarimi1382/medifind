import { Link } from 'react-router-dom';
import { Search, Shield, Activity, MapPin, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-black text-blue-600">MediFind</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 space-x-reverse text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600">خدمات</a>
          <a href="#" className="hover:text-blue-600">درباره ما</a>
          <a href="#" className="hover:text-blue-600">تماس با ما</a>
        </div>
        <Link to="/auth">
          <Button variant="primary" className="px-8">ورود / ثبت‌نام</Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-right">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
                🚑 پلتفرم هوشمند امداد و دارو
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
                جستجوی <span className="text-blue-600">دارو</span><br />
                در لحظات <span className="text-red-500">حیاتی</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                مدی‌فایند به شما کمک می‌کند در کمترین زمان ممکن، کمیاب‌ترین داروها را در نزدیک‌ترین داروخانه‌ها پیدا کنید یا در مواقع اضطراری درخواست امداد ثبت کنید.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                <Link to="/auth">
                  <Button variant="primary" className="h-14 px-10 text-lg group">
                    شروع استفاده
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-10 text-lg">
                  مشاهده دمو
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-16 md:mt-0 relative">
              <div className="w-full h-[500px] bg-blue-100 rounded-3xl overflow-hidden relative border-8 border-white shadow-2xl">
                 <img
                  src="https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical Search"
                  className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                 <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                       <Activity size={24} />
                    </div>
                    <div>
                       <p className="text-sm text-slate-500">امدادگران فعال</p>
                       <p className="text-xl font-bold">۱,۲۴۰ نفر</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black mb-4">چرا مدی‌فایند؟</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">ما با استفاده از تکنولوژی، فاصله بین بیمار، داروخانه و امدادگر را به حداقل رسانده‌ایم.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Search, title: 'جستجوی هوشمند', desc: 'دسترسی به موجودی لحظه‌ای بیش از ۲,۰۰۰ داروخانه در سراسر کشور.' },
              { icon: MapPin, title: 'امداد فوری', desc: 'ثبت درخواست اورژانسی و اعزام نزدیک‌ترین امدادگر به محل شما.' },
              { icon: Shield, title: 'امنیت داده‌ها', desc: 'حفاظت کامل از پرونده پزشکی و اطلاعات خصوصی کاربران.' }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <f.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
