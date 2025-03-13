import { useState, useEffect } from "react";
import { db, auth } from "./ChatApplication/firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        user: user.displayName,
        uid: user.uid,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    }
  };

  return (
    <div className="p-5">
      <div className="h-60 overflow-y-auto border p-3">
        {messages.map(msg => (
          <p key={msg.id} className={msg.uid === user.uid ? "text-right" : "text-left"}>
            <strong>{msg.user}: </strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={sendMessage} className="bg-green-500 text-white px-4 py-2 mt-2">
        Send
      </button>
    </div>
  )
}

export default Chat;
