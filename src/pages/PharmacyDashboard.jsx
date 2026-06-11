import { Package, Plus, Search, Filter, Edit3, Trash2, TrendingUp, AlertTriangle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { medicines } from '../data/mockData';

const PharmacyDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Inventory Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">مدیریت موجودی انبار</h1>
          <p className="text-slate-500">لیست داروها و کالاهای پزشکی موجود در داروخانه شما.</p>
        </div>
        <Button variant="primary" className="flex items-center space-x-2 space-x-reverse px-6 h-12 shadow-lg shadow-blue-100">
          <Plus size={20} />
          <span>افزودن داروی جدید</span>
        </Button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-medium mb-1">کل اقلام موجود</p>
              <h3 className="text-3xl font-black text-blue-900">۱,۲۴۸</h3>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
              <Package size={24} />
            </div>
          </div>
        </Card>

        <Card className="bg-orange-50 border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-600 font-medium mb-1">داروهای رو به اتمام</p>
              <h3 className="text-3xl font-black text-orange-900">۱۴</h3>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
              <AlertTriangle size={24} />
            </div>
          </div>
        </Card>

        <Card className="bg-green-50 border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 font-medium mb-1">فروش ۳۰ روز اخیر</p>
              <h3 className="text-3xl font-black text-green-900">۸۵۰</h3>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
              <TrendingUp size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Inventory Table Area */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="جستجو در انبار..."
              icon={Search}
              className="bg-slate-50 border-none"
            />
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
             <Button variant="outline" className="flex items-center space-x-2 space-x-reverse py-2.5">
                <Filter size={18} />
                <span>فیلترها</span>
             </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm uppercase">
                <th className="px-6 py-4 font-bold">نام دارو</th>
                <th className="px-6 py-4 font-bold">دسته‌بندی</th>
                <th className="px-6 py-4 font-bold">نوع</th>
                <th className="px-6 py-4 font-bold">تعداد موجود</th>
                <th className="px-6 py-4 font-bold text-left">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {medicines.map((med) => (
                <tr key={med.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="font-bold text-slate-900">{med.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{med.dosage}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {med.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600">{med.type}</td>
                  <td className="px-6 py-5">
                    <div className={`font-black ${med.count < 20 ? 'text-red-500' : 'text-slate-900'}`}>
                      {med.count}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end space-x-2 space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
           <span className="text-sm text-slate-500">نمایش ۵ از ۸۵ مورد</span>
           <div className="flex space-x-2 space-x-reverse">
              <Button variant="outline" size="sm" disabled>قبلی</Button>
              <Button variant="outline" size="sm">بعدی</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
