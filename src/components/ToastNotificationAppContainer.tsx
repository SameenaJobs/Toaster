import { ToastNotificationProvider } from "./ToastNotificationContext";
import { ToastContainer } from "./ToastContainer";
import { CustomToast } from "./CustomToast";
import {ToastNotificationDemo} from "./ToastNotificationDemo";

export const ToastNotificationAppContainer = () => {
    return (
        <ToastNotificationProvider CustomComponent={CustomToast}>
            <ToastContainer />
            <ToastNotificationDemo />
        </ToastNotificationProvider>
    );
} 