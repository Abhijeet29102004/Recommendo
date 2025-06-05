import React from 'react';
import { Search } from 'lucide-react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  icon,
  disabled = false,
  required = false,
  name,
  id,
  autoComplete,
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200 focus:outline-none';
  
  const disabledClasses = disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${disabledClasses} ${className}`;
  
  const isSearchInput = type === 'search';
  
  return (
    <div className="relative">
      {isSearchInput && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      )}
      
      {icon && !isSearchInput && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes} ${(isSearchInput || icon) ? 'pl-10' : ''}`}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default Input;