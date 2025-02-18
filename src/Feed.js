import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcons from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  console.log(selectUser);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />

          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption
            Icon={SubscriptionsIcons}
            title="Video"
            color="#E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* post */}
      <FlipMove>
        {posts &&
          posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
      </FlipMove>
    </div>
  );
};

export default Feed;
