import { Bell, Search, User } from 'lucide-react';
import { userProfile } from '../data/mockData';

const Navbar = ({ title }) => {
  return (
    <nav className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-4 space-x-reverse">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      <div className="flex items-center space-x-6 space-x-reverse">
        <div className="relative hidden md:block">
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </span>
          <input
            type="text"
            className="block w-64 pr-10 pl-3 py-1.5 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="جستجو..."
          />
        </div>

        <button className="relative text-gray-500 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute top-0 left-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        <div className="flex items-center space-x-2 space-x-reverse border-r pr-6 border-gray-200">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 leading-none">{userProfile.name}</p>
            <p className="text-[10px] text-gray-500 mt-1">
              {userProfile.role === 'pharmacy' ? 'تایید شده توسط سازمان' : `کد کاربری: ${userProfile.code}`}
            </p>
          </div>
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
             <User size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
