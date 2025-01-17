// hooks/useModal.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isOpen: boolean;
  currentStep: number;
  totalSteps: number;
  openModal: (steps?: number) => void;
  closeModal: () => void;
  nextStep: () => void;
  prevStep: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(1);

  const openModal = (steps: number = 1) => {
    setTotalSteps(steps);
    setCurrentStep(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, currentStep, totalSteps, openModal, closeModal, nextStep, prevStep }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
