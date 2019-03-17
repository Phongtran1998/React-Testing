import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const CommentBox = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.saveComment(comment);
    setComment("");
  };
  const [comment, setComment] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea
        value={comment}
        onChange={event => setComment(event.target.value)}
      />
      <div>
        <button type="submit">Submit Comment</button>
        <button
          type="button"
          className="fetch-comment"
          onClick={props.fetchComment}
        >
          Fetch Comment
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  actions
)(CommentBox);
