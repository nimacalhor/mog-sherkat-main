import { toast } from 'react-toastify';

// این فانکشن رو باید یجوری بنویسی که بتونی همه جا ازش استفاده کنی 
// data must be string
export const showToast = (data, successColor) => {
  toast.success(`${data.message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      background: successColor || "#28a745",
    },
  });
};
