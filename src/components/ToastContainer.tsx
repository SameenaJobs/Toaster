import { useNotification } from "./ToastNotificationContext";

// container that renders the list of notification this needs to be included at the top of the application
// inside notification provider along side the app component
export const ToastContainer = () => {
  const { notifications, removeNotification, CustomComponent } =
    useNotification();

  return (
    <div className="toast-container">
      {notifications.map((notification) => {
        if (CustomComponent) {
          return <CustomComponent key={notification.id} {...notification} />;
        }

        return (
          <div
            key={notification.id}
            className={`toast ${notification.type}`}
            style={{ marginTop: "10px" }}
          >
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>
              Close
            </button>
          </div>
        );
      })}
    </div>
  );
};