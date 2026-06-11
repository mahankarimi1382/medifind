import Card from '../components/Card';
import { missionHistory } from '../data/mockData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const RescuerHistory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">سوابق عملیات امداد</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-xl shadow-sm border border-blue-500 overflow-hidden">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-blue-100 text-sm">کل ماموریت‌ها</p>
              <p className="text-2xl font-bold">۱۲۴</p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 px-4 font-semibold text-slate-600">نوع عملیات</th>
                <th className="py-4 px-4 font-semibold text-slate-600">تاریخ</th>
                <th className="py-4 px-4 font-semibold text-slate-600">نام بیمار</th>
                <th className="py-4 px-4 font-semibold text-slate-600">نتیجه</th>
              </tr>
            </thead>
            <tbody>
              {missionHistory.map((mission) => (
                <tr key={mission.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-slate-900">{mission.type}</td>
                  <td className="py-4 px-4 text-slate-600">{mission.date}</td>
                  <td className="py-4 px-4 text-slate-600">{mission.patient}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-emerald-600">
                      <CheckCircle2 size={16} />
                      <span className="text-sm font-medium">{mission.result}</span>
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

export default RescuerHistory;
