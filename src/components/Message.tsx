interface MessageProps {
  notification?: {
    imageUrl?: string;
    title?: string;
    body?: string;
  };
}

const Message = ({ notification }: MessageProps) => {
  return (
    <>
      <div className="notification-container">
        {notification?.imageUrl && (
          <div className="image-container">
            <img src={notification.imageUrl} width={100} />
          </div>
        )}
        <div className="notification-content">
          <span className="notification-title">{notification?.title}</span>
          <hr />
          <p className="notification-body">{notification?.body}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
