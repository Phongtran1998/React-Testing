import React from "react";
import { connect } from "react-redux";

const CommentList = props => {
  const renderComments = () => {
    return props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};
const mapStateToProps = ({ comments }) => {
  return { comments };
};
export default connect(mapStateToProps)(CommentList);
