import { useState } from "react";
import "./index.css";
import "./App.css";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data);
  const notificationCounter = notifications.filter(
    (notification) => !notification.isRead
  ).length;
  return (
    <>
      <div className="notificationsContainer">
        <header>
          <div className="headerTitle">
            <h2>Notifications </h2>
            <span className="notificationNum">{notificationCounter}</span>
          </div>
          <p
            className="markAll"
            onClick={() => {
              const newMarked = notifications.map((currentMarked) => {
                return {
                  ...currentMarked,
                  isRead: true,
                };
              });
              setNotifications(newMarked);
            }}
          >
            Mark all as read
          </p>
        </header>
        <main>
          {notifications.map((notification) => {
            return (
              <div
                key={notification.id}
                className="notification"
                style={
                  !notification.isRead ? { backgroundColor: "#f7fafd" } : {}
                }
                onClick={() => {
                  const newNotifications = notifications.map(
                    (currentNotification) => {
                      if (notification.id === currentNotification.id) {
                        return {
                          ...currentNotification,
                          isRead: true,
                        };
                      }
                      return currentNotification;
                    }
                  );
                  setNotifications(newNotifications);
                }}
              >
                <img
                  className="profilePic"
                  src={notification.profilePic}
                  alt=""
                />
                <div className="fullDetail">
                  <div className="notificationDetails">
                    <p>
                      <span className="username">{notification.username}</span>
                      <span className="action">{notification.action}</span>{" "}
                      {notification.post ? (
                        <span className="post">{notification.post}</span>
                      ) : null}
                      {notification.groupName ? (
                        <span className="groupName">
                          {notification.groupName}
                        </span>
                      ) : null}
                    </p>
                    {!notification.isRead ? (
                      <div className="redDot"></div>
                    ) : null}
                  </div>
                  <p className="time">{notification.time}</p>
                  {notification.text ? (
                    <p className="text">{notification.text}</p>
                  ) : null}
                </div>
                {notification.userPicture ? (
                  <img
                    className="userPic"
                    src={notification.userPicture}
                    alt=""
                  />
                ) : null}
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
