import { Activity, MapPin, AlertCircle, CheckCircle2, Clock, Navigation } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { emergencyRequests } from '../data/mockData';

const RescuerDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">پنل عملیاتی امدادگر</h1>
          <p className="text-slate-500">خوش آمدید احمد عزیز، آماده دریافت ماموریت جدید هستید؟</p>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
            وضعیت: آماده به خدمت
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'ماموریت‌های امروز', value: '۱۲', icon: Activity, bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: 'ساعت فعالیت', value: '۵:۳۰', icon: Clock, bg: 'bg-purple-50', text: 'text-purple-600' },
          { label: 'امتیاز عملکرد', value: '۴.۸', icon: CheckCircle2, bg: 'bg-green-50', text: 'text-green-600' },
          { label: 'درخواست‌های معلق', value: '۲', icon: AlertCircle, bg: 'bg-orange-50', text: 'text-orange-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-4 space-x-reverse">
            <div className={`w-12 h-12 ${stat.bg} ${stat.text} rounded-2xl flex items-center justify-center`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="text-xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Missions */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center space-x-2 space-x-reverse">
            <AlertCircle className="text-orange-500" />
            <span>درخواست‌های امداد فوری (اطراف شما)</span>
          </h3>

          <div className="space-y-4">
            {emergencyRequests.map((req) => (
              <Card key={req.id} className="relative overflow-hidden group">
                {req.priority === 'بحرانی' && (
                  <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                      <Activity size={28} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 space-x-reverse mb-1">
                        <h4 className="font-bold text-lg">{req.medicine}</h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          req.priority === 'بحرانی' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          {req.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2 flex items-center">
                        <MapPin size={14} className="ml-1" />
                        {req.address}
                      </p>
                      <div className="flex items-center space-x-4 space-x-reverse text-xs text-slate-400">
                        <span className="flex items-center">
                          <Clock size={12} className="ml-1" />
                          {req.time}
                        </span>
                        <span className="flex items-center">
                          <CheckCircle2 size={12} className="ml-1" />
                          وضعیت: {req.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="px-6 border-slate-200 hover:bg-slate-50">جزئیات</Button>
                    <Button variant="primary" className="px-8 shadow-lg shadow-blue-100">قبول ماموریت</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Operational Map Sidebar */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800">نقشه عملیاتی</h3>
          <div className="bg-slate-200 rounded-3xl h-[400px] relative overflow-hidden group border-4 border-white shadow-xl">
             <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/51.4,35.7,11/400x400?access_token=none')] bg-cover opacity-50"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                   <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center animate-ping absolute -inset-0"></div>
                   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white relative border-2 border-white">
                      <Navigation size={20} className="rotate-45" />
                   </div>
                </div>
             </div>

             <div className="absolute bottom-4 inset-x-4">
                <Button variant="primary" className="w-full bg-slate-900/90 backdrop-blur hover:bg-slate-800 text-xs">
                  بزرگنمایی نقشه کامل
                </Button>
             </div>
          </div>

          <Card className="bg-blue-600 text-white border-none shadow-lg shadow-blue-200">
             <h4 className="font-bold mb-2">تجهیزات همراه</h4>
             <ul className="text-sm space-y-2 opacity-90">
                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                   <span>کپسول اکسیژن</span>
                   <span className="font-bold">۲ عدد</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                   <span>کیت احیا (AED)</span>
                   <span className="font-bold">آماده</span>
                </li>
                <li className="flex justify-between items-center">
                   <span>جعبه کمک‌های اولیه</span>
                   <span className="font-bold">کامل</span>
                </li>
             </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RescuerDashboard;
