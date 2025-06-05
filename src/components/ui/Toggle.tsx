import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  size = 'md',
}) => {
  const sizes = {
    sm: {
      toggle: 'w-8 h-4',
      circle: 'w-3 h-3',
      translateX: 'translate-x-4',
    },
    md: {
      toggle: 'w-11 h-6',
      circle: 'w-5 h-5',
      translateX: 'translate-x-5',
    },
    lg: {
      toggle: 'w-14 h-7',
      circle: 'w-6 h-6',
      translateX: 'translate-x-7',
    },
  };

  return (
    <label className={`flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <div
          className={`${sizes[size].toggle} ${
            checked ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
          } rounded-full transition-colors duration-200`}
        ></div>
        <div
          className={`${sizes[size].circle} absolute left-0.5 top-0.5 bg-white rounded-full transition-transform duration-200 ${
            checked ? sizes[size].translateX : 'translate-x-0'
          }`}
        ></div>
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
};

export default Toggle;