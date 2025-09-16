import { createContext, useContext, useState, ReactNode } from "react";

type ModalsState = Record<string, boolean>;

type ModalContextType = {
  modals: ModalsState;
  open: (name: string) => void;
  close: (name: string) => void;
  toggle: (name: string) => void;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
  initialModals?: ModalsState;
};

const initialModals: ModalsState = {
  MenuModal: false,
  ImageModal: false,
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<ModalsState>(initialModals);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const open = (name: string) => {
    document.body.style.overflow = "hidden";
    setModals((prev) => ({ ...prev, [name]: true }));
  }

  const close = (name: string) => {
    document.body.style.overflow = "auto";
    setModals((prev) => ({ ...prev, [name]: false }));
  }

  const toggle = (name: string) => {
    if (modals[name]) document.body.style.overflow = "auto";
    if (!modals[name]) document.body.style.overflow = "hidden";
    setModals((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  return (
    <ModalContext.Provider value={{ modals, open, close, toggle,activeImageIndex, setActiveImageIndex }}>
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
