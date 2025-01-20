import React from "react";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header
      className="bg-white text-black border-b border-black p-4"
      style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
      <h1 className="text-lg font-semibold px-2">DraftMania Board</h1>
    </header>
  );
};
