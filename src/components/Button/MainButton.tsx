import React from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
  bgColor?: string;
};

export const MainButton: React.FC<ButtonProps> = ({ onClick, text, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor || 'bg-blue'} text-black text-sm font-semibold p-4 rounded-2xl shadow-md`}
    >
     <p className="font-semibold text-base">
     {text}
      </p> 
    </button>
  );
};
