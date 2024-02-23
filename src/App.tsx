import { getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import "./App.css";
import { messaging } from "./libs/firebase/firebase-config";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const { VITE_APP_VAPID_KEY } = import.meta.env;

function App() {
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY,
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.data} />);
  });

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <ToastContainer />
      <div>test</div>
    </>
  );
}

export default App;
