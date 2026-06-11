
const Input = ({ label, icon: Icon, className = '', ...props }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          className={`block w-full ${Icon ? 'pr-10' : 'pr-3'} pl-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
