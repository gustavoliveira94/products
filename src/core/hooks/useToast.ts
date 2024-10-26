import { toast as toasts } from 'react-toastify';

interface IToastProps {
  title: string;
  position?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const useToast = () => {
  const toast = ({ title, position = 'top-right', type }: IToastProps) => {
    toasts.success(title, {
      position,
      autoClose: 3000,
      type,
    });
  };

  return {
    toast,
  };
};
