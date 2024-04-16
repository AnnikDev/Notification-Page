import { useState } from "react";
import "./index.css";
import "./App.css";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data);
  return (
    <>
      <div className="notificationsContainer">
        <header>
          <div className="headerTitle">
            <h2>Notifications </h2>
            <span className="notificationNum">3</span>
          </div>
          <p>Mark all as read</p>
        </header>
        <main>
          {notifications.map((notification) => {
            return (
              <div key={notification.id} className="notification">
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
                    {/* <span className="username">{notification.username}</span> */}
                    {/* <span className="action">{notification.action}</span> */}
                    {/* {notification.post ? (
                      <span className="post">{notification.post}</span>
                    ) : null} */}
                    {/* {notification.groupName ? (
                      <span className="groupName">
                        {notification.groupName}
                      </span>
                    ) : null} */}
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
