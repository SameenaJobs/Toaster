import React, {createContext, useState, useContext, useEffect} from "react";

export enum NotificationTypes {
    SUCCESS =  "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning"
}
// notification object
export interface ToastNotification {
    id: string;
    type: NotificationTypes;
    message: string;
    duration?: number; // in milliseconds
}
interface ToastNotificationContextProps {
    notifications: ToastNotification[];
    addNotification: (notification: ToastNotification) => void;
    removeNotification: (id: string) => void;
    CustomComponent?: React.ElementType;
}

const ToastNotificationContext = createContext<ToastNotificationContextProps | undefined>(undefined);

export const useNotification = (): ToastNotificationContextProps => {
    const context = useContext(ToastNotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within a ToastNotificationProvider");
    }
    return context;
}

interface ToastNotificationProviderProps {
    children: React.ReactNode;
    CustomComponent?: React.ElementType;
}

export const ToastNotificationProvider = ({
    children,
    CustomComponent,
}: ToastNotificationProviderProps) => {
    const [notifications, setNotifications] = useState<ToastNotification[]>([]);
    const addNotification = (notification : ToastNotification) => {
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };
    const removeNotification = (id: string) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notif) => notif.id !== id));
    };
    useEffect(() => {
        notifications.forEach((notification) => {
            if (notification.duration) {
                const timeoutId = setTimeout(() => {
                    removeNotification(notification.id);
                }, notification.duration);

                return () => clearTimeout(timeoutId);
            }
        });
    }, [notifications]);

    return (
        <ToastNotificationContext.Provider value={{
            notifications,
            addNotification,
            removeNotification,
            CustomComponent,
        }}>
            {children}
        </ToastNotificationContext.Provider>
    );
}