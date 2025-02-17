import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/Modals";
import { MainButton } from "@/components/Button/MainButton";
import { Step1 } from "@/components/Modals/ModalStep/Step1";
import { Step2 } from "@/components/Modals/ModalStep/Step2";
import { Step3 } from "@/components/Modals/ModalStep/Step3";
import { Step4 } from "@/components/Modals/ModalStep/Step4";
import { Step5 } from "@/components/Modals/ModalStep/Step5";
import { StepWating } from "@/components/Modals/ModalStep/StepWating";
import { useState } from "react";
import { createRoom } from "@/lib/queries";

export default function Home() {
  const { openModal } = useModal();
  const [room, setRoom] = useState<any>(null);
  const [selectedShield, setSelectedShield] = useState<string | null | any>(
    null
  );

  const handleCreateRoom = async () => {
    const newRoom = await createRoom("Minha Sala", 5, selectedShield);
    if (newRoom) setRoom(newRoom);
    openModal(stepsContent.length);
  };

  const stepsContent = [
    <Step1 />,
    <Step2
      selectedShield={selectedShield}
      setSelectedShield={setSelectedShield}
    />,
    <Step3 selectedShield={selectedShield} />,
    <Step4 />,
    <Step5 />,
    <StepWating />,
  ];

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <Image
        src="/bg-home.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />
      <main className="flex flex-col gap-8 row-start-2 items-center absolute bottom-36">
        <MainButton onClick={handleCreateRoom} text="Começar" />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/vinialvesrodriguesp/"
            target="_blank">
            Vinicius Alves Rodrigues
          </a>
        </p>
      </footer>
      <Modal stepsContent={stepsContent} />
    </div>
  );
}
