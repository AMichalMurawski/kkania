export type ToastType = 'emailSend' | 'wrong';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  timeExist?: number;
}