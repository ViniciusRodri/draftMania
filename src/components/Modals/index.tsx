import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@/hooks/useModal';
import { MainButton } from '../Button/MainButton';

type ModalProps = {
  stepsContent: React.ReactElement[];
};

export const Modal: React.FC<ModalProps> = ({ stepsContent }) => {
  const { isOpen, currentStep, totalSteps, closeModal, nextStep, prevStep } = useModal();
  const router = useRouter();

  if (!isOpen) return null;

  const handleRedirect = () => {
    closeModal();
    router.push('/dashboard'); 
  };

  const StepComponent = stepsContent[currentStep];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-6 rounded-2xl relative max-w-lg w-full border-4 border-orange">
        {/* <button
          className="absolute top-2 right-2 text-black hover:text-white"
          onClick={closeModal}
        >
          ✖
        </button> */}
        {/* <div>{stepsContent[currentStep]}</div> */}
        <div className="items-center justify-center">
        {stepsContent[currentStep]}
        </div>
        <div className="flex justify-center items-center mt-4">
          {currentStep < totalSteps - 1 ? (
            <MainButton bgColor='bg-orange' onClick={nextStep} text="Próximo"/>
          ) : (
            <MainButton bgColor='bg-orange' onClick={handleRedirect} text="Jogar"/>
          )}
        </div>
      </div>
    </div>
  );
};
