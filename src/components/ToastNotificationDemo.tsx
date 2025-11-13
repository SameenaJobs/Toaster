import { useNotification, NotificationTypes } from "./ToastNotificationContext";
import { useTheme } from "./ThemeContext";

export const ToastNotificationDemo = () => {
    const { addNotification } = useNotification();
    const themeContext = useTheme();
    if (!themeContext) {
    return null; // or handle the error case
    }
    const { theme, toggleTheme } = themeContext;
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
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <button onClick={() => showNotification(NotificationTypes.SUCCESS)}>SUCCESS Notification</button>
            <button onClick={() => showNotification(NotificationTypes.ERROR)}>ERROR Notification</button>
            <button onClick={() => showNotification(NotificationTypes.WARNING)}>WARNING Notification</button>
        </div>
    )
}