import { toast } from 'react-toastify';

export default function warningMessage(message: string) {
  console.log('sss', message);

  toast.warn(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
}
