import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Map, History, LogOut, User } from 'lucide-react';
import { userProfile } from '../data/mockData';

const Sidebar = ({ role = 'citizen' }) => {
  const menuItems = {
    citizen: [
      { icon: Map, label: 'نقشه و جستجو', path: '/citizen' },
      { icon: History, label: 'تاریخچه درخواست‌ها', path: '/citizen/history' },
    ],
    rescuer: [
      { icon: LayoutDashboard, label: 'داشبورد امدادگر', path: '/rescuer' },
      { icon: Map, label: 'نقشه عملیاتی', path: '/rescuer/map' },
      { icon: History, label: 'سوابق امداد', path: '/rescuer/history' },
    ],
    pharmacy: [
      { icon: Package, label: 'مدیریت موجودی', path: '/pharmacy' },
      { icon: History, label: 'سفارشات دریافتی', path: '/pharmacy/orders' },
    ],
  };

  const currentMenu = menuItems[role] || menuItems.citizen;

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 flex items-center space-x-2 space-x-reverse">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-xl font-bold">M</span>
        </div>
        <span className="text-xl font-bold tracking-tight">MediFind</span>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2">
        <div className="mb-8 px-2 py-4 bg-slate-800/50 rounded-xl">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">{userProfile.name}</p>
              <p className="text-xs text-slate-400">کد: {userProfile.code}</p>
            </div>
          </div>
        </div>

        {currentMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center space-x-3 space-x-reverse px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>خروج از حساب</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
