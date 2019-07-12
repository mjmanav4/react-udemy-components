import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are u sure??</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:55pm"
          text="text1"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="Today at 5:55pm"
          text="text2"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="abd"
          timeAgo="Today at 6:55pm"
          text="text3"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
