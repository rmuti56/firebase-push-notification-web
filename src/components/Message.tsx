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
      <div id="notificationHeader">
        {/* image is optional */}
        {notification?.imageUrl && (
          <div id="imageContainer">
            <img src={notification.imageUrl} width={100} />
          </div>
        )}
        <span>{notification?.title}</span>
      </div>
      <div id="notificationBody">{notification?.body}</div>
    </>
  );
};

export default Message;
