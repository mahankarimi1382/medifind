
const Card = ({ children, className = '', title, headerAction }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {(title || headerAction) && (
        <div className="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
          {title && <h3 className="font-semibold text-gray-800">{title}</h3>}
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
