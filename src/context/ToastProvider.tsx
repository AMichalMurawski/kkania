import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '../utils';

interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToasts must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: ReactNode;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const newToast: Toast = {
            ...toast,
            timeExist: toast.timeExist || 5000,
            id: Date.now().toString(),
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
        setTimeout(() => {
            removeToast(newToast.id);
        }, newToast.timeExist);
    };

    const removeToast = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};
