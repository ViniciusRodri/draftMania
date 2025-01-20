import React from "react";

type InputProps = {};

export const SearchInput: React.FC<InputProps> = ({}) => {
  return (
    <form className="w-[100%]">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray dark:text-gray"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-black border border-lightGray rounded-2xl bg-lightGray focus:ring-gray focus:border-gray dark:bg-lightGray dark:border-lightGray dark:placeholder-gray dark:text-black dark:focus:ring-gray dark:focus:border-blue-500"
          placeholder="Pesquise o nome do jogador aqui..."
          required
        />
      </div>
    </form>
  );
};
