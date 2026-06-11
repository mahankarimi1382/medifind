import { useState } from 'react';
import { Search, MapPin, Navigation, Clock, ShieldAlert } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import EmergencyModal from '../components/EmergencyModal';
import { pharmacies } from '../data/mockData';

const CitizenDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <EmergencyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">جستجو و نقشه</h1>
          <p className="text-slate-500">داروخانه یا داروی مورد نظر خود را پیدا کنید.</p>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <Button
            variant="danger"
            className="flex items-center space-x-2 space-x-reverse px-6 h-12 shadow-lg shadow-red-100"
            onClick={() => setIsModalOpen(true)}
          >
            <ShieldAlert size={20} />
            <span>درخواست امداد فوری</span>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="جستجوی نام دارو (مثلا: انسولین)"
            icon={Search}
            className="border-none bg-slate-50 focus:ring-0"
          />
        </div>
        <div className="flex-1">
          <Input
            placeholder="محدوده محلی (مثلا: ونک)"
            icon={MapPin}
            className="border-none bg-slate-50 focus:ring-0"
          />
        </div>
        <Button variant="primary" className="px-10 h-12">جستجو</Button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 bg-slate-200 rounded-3xl min-h-[500px] relative overflow-hidden border-4 border-white shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
            <MapPin size={48} className="mb-4 opacity-20" />
            <p className="font-medium">نقشه تعاملی در حال بارگذاری...</p>
          </div>

          {/* Floating Map Controls */}
          <div className="absolute bottom-6 left-6 flex flex-col space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50">+</button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50">-</button>
          </div>

          <div className="absolute top-6 right-6">
             <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-700">شما اینجا هستید</span>
             </div>
          </div>
        </div>

        {/* Results Sidebar */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 px-2">داروخانه‌های نزدیک</h3>
          {pharmacies.map(pharmacy => (
            <Card key={pharmacy.id} className="cursor-pointer hover:border-blue-200 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{pharmacy.name}</h4>
                  <div className="flex items-center text-xs text-slate-400 mt-1">
                    <Clock size={12} className="ml-1" />
                    <span>{pharmacy.status === 'باز' ? 'تا ساعت ۲۴:۰۰ باز است' : 'در حال حاضر بسته است'}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold ${pharmacy.status === 'باز' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {pharmacy.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {pharmacy.address}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 py-2 text-xs">تماس</Button>
                <Button variant="primary" size="sm" className="flex-1 py-2 text-xs flex items-center justify-center space-x-1 space-x-reverse">
                  <Navigation size={14} />
                  <span>مسیریابی</span>
                </Button>
              </div>
            </Card>
          ))}
          <button className="w-full py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
            مشاهده نتایج بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
