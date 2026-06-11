import Card from '../components/Card';
import Button from '../components/Button';
import { pharmacyOrders } from '../data/mockData';
import { MoreVertical } from 'lucide-react';

const PharmacyOrders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">سفارشات دریافتی</h1>
          <p className="text-slate-500">لیست درخواست‌های خرید دارو توسط کاربران</p>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 px-4 font-semibold text-slate-600">نام مشتری</th>
                <th className="py-4 px-4 font-semibold text-slate-600">اقلام سفارش</th>
                <th className="py-4 px-4 font-semibold text-slate-600">زمان ثبت</th>
                <th className="py-4 px-4 font-semibold text-slate-600">وضعیت</th>
                <th className="py-4 px-4 font-semibold text-slate-600 text-left">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {pharmacyOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-slate-900">{order.customer}</td>
                  <td className="py-4 px-4 text-slate-600">{order.items}</td>
                  <td className="py-4 px-4 text-slate-500 text-sm">{order.time}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'آماده تحویل' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-left">
                    <Button variant="outline" size="sm" className="h-8 w-8 !p-0">
                      <MoreVertical size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PharmacyOrders;
