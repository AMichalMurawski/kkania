export type ToastType = 'emailSend' | 'error' | 'loading';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  timeExist?: number;
}