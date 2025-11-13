import type { ToastNotification } from "./ToastNotificationContext";

export const CustomToast = ({ message, type }: ToastNotification) => {
  return (
    <div className={`custom-toast custom-${type}`}>
      <p>{message}</p>
    </div>
  );
};