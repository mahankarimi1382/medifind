import { Navigation } from 'lucide-react';

const RescuerMap = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">نقشه عملیاتی</h1>
        <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          شما آنلاین هستید
        </div>
      </div>

      <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
        {/* Placeholder for real map */}
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/51.41,35.75,12/800x600?access_token=pk.placeholder')] bg-cover bg-center opacity-40 grayscale" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white text-center max-w-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">در حال دریافت موقعیت...</h3>
            <p className="text-slate-500">نقشه عملیاتی به زودی بارگذاری می‌شود. تمام درخواست‌های نزدیک روی این نقشه نمایش داده خواهند شد.</p>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="w-3 h-3 bg-rose-500 rounded-full" />
            <span className="text-sm font-medium">موقعیت بیمار</span>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm font-medium">موقعیت شما</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescuerMap;
