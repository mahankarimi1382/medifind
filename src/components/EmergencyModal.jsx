import { X, ShieldAlert, MapPin, Phone } from 'lucide-react';
import Button from './Button';
import Input from './Input';

const EmergencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-rose-50">
          <div className="flex items-center space-x-3 space-x-reverse text-rose-600">
            <ShieldAlert size={24} />
            <h2 className="text-xl font-bold">ثبت درخواست امداد فوری</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-100 rounded-full text-rose-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-amber-800 text-sm leading-relaxed">
            توجه: این درخواست برای موارد اورژانسی و حیاتی است. نزدیک‌ترین امدادگر پس از تایید به موقعیت شما اعزام خواهد شد.
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">نام دارو یا مورد حیاتی</label>
              <Input placeholder="مثلا: کپسول اکسیژن، انسولین..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">شماره تماس</label>
                <Input placeholder="۰۹۱۲۰۰۰۰۰۰۰" icon={Phone} />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">موقعیت فعلی</label>
                <Button variant="outline" className="w-full text-xs h-12">
                  <MapPin size={16} className="ml-2" />
                  دریافت خودکار
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">توضیحات تکمیلی (اختیاری)</label>
              <textarea
                className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500 min-h-[100px] outline-none"
                placeholder="توضیحات بیشتر در مورد وضعیت بیمار..."
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 flex gap-4">
          <Button variant="outline" className="flex-1" onClick={onClose}>انصراف</Button>
          <Button variant="danger" className="flex-[2]">تایید و ارسال درخواست</Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
