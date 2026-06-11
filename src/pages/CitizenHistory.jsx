import Card from '../components/Card';
import { requestHistory } from '../data/mockData';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const CitizenHistory = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'تحویل شده':
        return <CheckCircle size={18} className="text-emerald-500" />;
      case 'لغو شده':
        return <XCircle size={18} className="text-rose-500" />;
      default:
        return <Clock size={18} className="text-amber-500" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'تحویل شده':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'لغو شده':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">تاریخچه درخواست‌ها</h1>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 px-4 font-semibold text-slate-600">نام قلم / دارو</th>
                <th className="py-4 px-4 font-semibold text-slate-600">تاریخ</th>
                <th className="py-4 px-4 font-semibold text-slate-600">داروخانه</th>
                <th className="py-4 px-4 font-semibold text-slate-600">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {requestHistory.map((item) => (
                <tr key={item.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-medium text-slate-900">{item.item}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-600">{item.date}</td>
                  <td className="py-4 px-4 text-slate-600">{item.pharmacy}</td>
                  <td className="py-4 px-4">
                    <div className={`inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full border text-xs font-medium ${getStatusClass(item.status)}`}>
                      {getStatusIcon(item.status)}
                      <span>{item.status}</span>
                    </div>
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

export default CitizenHistory;
