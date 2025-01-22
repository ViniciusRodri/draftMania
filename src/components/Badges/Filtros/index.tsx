import React, { useState } from "react";

type BadgeFiltroProps = {
  title: string; 
  options: { label: string; value: string }[]; 
  onChange: (selectedOptions: string[]) => void; 
};

export const BadgeFiltro: React.FC<BadgeFiltroProps> = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (value: string) => {
    let updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(value)) {
      updatedOptions = updatedOptions.filter((opt) => opt !== value);
    } else {
      updatedOptions.push(value);
    }
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      <button
        onClick={toggleDropdown}
        className="text-black bg-white font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center dark:bg-white border">
        {title}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray z-50">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">{title}</h6>
          <ul className="space-y-2 text-sm">
            {options.map((option) => (
              <li key={option.value} className="flex items-center">
                <input
                  id={option.value}
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-black focus:ring-primary-500 dark:focus:ring-black dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={option.value}
                  className="ml-2 text-sm font-medium text-ligh dark:text-white">
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
