import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ role }) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes('/citizen')) {
      if (location.pathname.includes('/history')) return 'تاریخچه درخواست‌ها';
      return 'جستجو و نقشه';
    }
    if (location.pathname.includes('/rescuer')) {
      if (location.pathname.includes('/history')) return 'سوابق امداد';
      if (location.pathname.includes('/map')) return 'نقشه عملیاتی';
      return 'داشبورد امدادگر';
    }
    if (location.pathname.includes('/pharmacy')) {
      if (location.pathname.includes('/orders')) return 'سفارشات دریافتی';
      return 'مدیریت موجودی انبار';
    }
    return '';
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden" dir="rtl">
      {/* Sidebar - fixed width */}
      <Sidebar role={role} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar title={getPageTitle()} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
