import {toast} from 'react-toastify';

export const toastify = (text , type) => {
    if(type === "success") {
        toast.success(text, {
            position: "top-right",
            });
    } else {
        toast.error(text, {
            position: "top-right",
            });
    }
}
