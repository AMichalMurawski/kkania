import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalsState = Record<string, boolean>;

type ModalContextType = {
  modals: ModalsState;
  open: (name: string) => void;
  close: (name: string) => void;
  toggle: (name: string) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
  initialModals?: ModalsState;
};

const initialModals: ModalsState = {
    MenuModal: false
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [modals, setModals] = useState<ModalsState>(initialModals);

  const open = (name: string) =>
    setModals((prev) => ({ ...prev, [name]: true }));

  const close = (name: string) =>
    setModals((prev) => ({ ...prev, [name]: false }));

  const toggle = (name: string) =>
    setModals((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <ModalContext.Provider value={{ modals, open, close, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal musi być użyte wewnątrz ModalProvider");
  }
  return ctx;
};
