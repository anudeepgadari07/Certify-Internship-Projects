import React, { useState } from "react";
import "./Comments.css";

function Comments() {
  const [comments, setComments] = useState(["Great video!", "Very helpful!"]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input.trim() === "") return;
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      <input
        type="text"
        placeholder="Add a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addComment}>Post</button>

      <ul>
        {comments.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
