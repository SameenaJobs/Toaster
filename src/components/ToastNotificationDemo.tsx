import { useNotification, NotificationTypes } from "./ToastNotificationContext";

export const ToastNotificationDemo = () => {
    const { addNotification } = useNotification();

    const showNotification = (type: NotificationTypes) => {
        const id = Math.random().toString(36).substr(2, 9);
        addNotification({
            id,
            type,
            message: `This is a ${type} notification!`,
            duration: 3000, // auto-dismiss after 3 seconds
        });
    }

    return (
        <div className="container">
            <button onClick={() => showNotification(NotificationTypes.SUCCESS)}>SUCCESS Notification</button>
            <button onClick={() => showNotification(NotificationTypes.ERROR)}>ERROR Notification</button>
            <button onClick={() => showNotification(NotificationTypes.WARNING)}>WARNING Notification</button>
        </div>
    )
}