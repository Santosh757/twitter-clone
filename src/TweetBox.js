import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Sks",
      userName: "@sks75",
      verified: true,
      text: tweetMessage,
    });
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox-input">
          <Avatar src="sks.jpg" alt="SKS" />
          <input
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <Button className="tweetBox-button" type="submit" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
