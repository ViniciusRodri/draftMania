import React from "react";
import Image from "next/image";
import { Timer } from "@/components/Timer";

type MenuProps = {
  items: { label: string; icon: string }[];
};

export const LeftMenu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div
      className="w-[220px] bg-white text-black h-screen fixed border-r border-black"
      style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
      <nav className="flex flex-col py-6 px-4 gap-4">
        {/* Player */}
        <div className="flex pl-2">
          <div className="flex items-center gap-2">
            <Image
              src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
              alt="São Paulo"
              objectFit="cover"
              objectPosition="center"
              width={30}
              height={30}
            />
            <p className="text-base">Player</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Timer isPlaying={true} />
        </div>
        {/* Players */}
        <div className="flex flex-col pl-2 gap-4">
          <h3 className="font-medium">Players</h3>
          {items.map((item, index) => (
            <div className="flex items-center gap-2 pl-2">
              <Image
                src={item.icon}
                alt="São Paulo"
                objectFit="cover"
                objectPosition="center"
                width={30}
                height={30}
              />
              <p key={index} className="text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
