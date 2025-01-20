import React from "react";
import Image from "next/image";

type MenuProps = {};

export const RightMenu: React.FC<MenuProps> = ({}) => {
  return (
    <div
      className="w-[220px] bg-white text-black h-screen fixed right-0 border-l border-black"
      style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
      <nav className="flex flex-col py-6 px-4 gap-4">
        <div className="flex flex-col">
          {/* Chat */}
          <div className="flex item-center gap-2">
            <p className="text-base">Chat</p>
          </div>
          <div className="pl-2">
            <div className="flex flex-col py-2 px-2">
              <p className="text-base text-black font-medium">
                You fixed a bug.
              </p>
              <p className="text-sm text-gray">VjacksonS</p>
            </div>
            <div className="flex flex-col py-2 px-2">
              <p className="text-base text-black font-medium">
                New user registered.
              </p>
              <p className="text-sm text-gray">GuiBorges</p>
            </div>
            <div className="flex flex-col py-2 px-2">
              <p className="text-base text-black font-medium">
                You fixed a bug.
              </p>
              <p className="text-sm text-gray">oestagiario</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-1 pt-5">
            <p className="text-base">Live</p>
            <Image
              src="/icons/live.png"
              alt="São Paulo"
              width={0}
              height={0}
              objectFit="cover"
              objectPosition="center"
              className="w-2 h-2 rounded-full"
            />
          </div>

          <div className="flex flex-col pl-2">
            <div className="flex items-center gap-2 py-2 px-2">
              <div>
                <Image
                  src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
                  alt="São Paulo"
                  objectFit="cover"
                  objectPosition="center"
                  width={30}
                  height={30}
                />
              </div>
              <div>
              <p className="text-base text-black font-medium">
                You fixed a bug.
              </p>
              <p className="text-sm text-gray">VjacksonS</p>

              </div>
            </div>
           
            <div className="flex items-center gap-2 py-2 px-2">
              <div>
                <Image
                  src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
                  alt="São Paulo"
                  objectFit="cover"
                  objectPosition="center"
                  width={30}
                  height={30}
                />
              </div>
              <div>
              <p className="text-base text-black font-medium">
                You fixed a bug.
              </p>
              <p className="text-sm text-gray">VjacksonS</p>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
