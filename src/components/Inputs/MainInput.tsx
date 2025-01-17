import React from "react";

type InputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

export const MainInput: React.FC<InputProps> = ({ placeholder, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      className="mt-1 px-5 py-4 bg-white border shadow-sm border-orange placeholder-slate-400 focus:outline-none
       focus:border-yellow block w-full rounded-2xl sm:text-base text-black focus:ring-1"
      placeholder={placeholder}
    />
  );
};
