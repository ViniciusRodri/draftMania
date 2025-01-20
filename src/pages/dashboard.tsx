import { Filtro } from "@/components/Filtro";
import { Header } from "@/components/Header";
import { LeftMenu } from "@/components/Menus/LeftMenu";
import { RightMenu } from "@/components/Menus/RightMenu";
import React from "react";

export default function Dashboard() {
  const menuItems = [
    {
      label: "Player 1",
      icon: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
    },
    {
      label: "Player 2",
      icon: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
    },
    {
      label: "Player 3",
      icon: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
    },
    {
      label: "Player 4",
      icon: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
    },
  ];

  return (
    <div className="flex">
      <LeftMenu items={menuItems} />
      <div className="ml-[220px] w-full">
        <Header />
        <main>
          <Filtro />
        </main>
      </div>
      <RightMenu />
      
    </div>
  );
}
