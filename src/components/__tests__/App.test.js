import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(done => {
  wrapped = shallow(<App />);
  done();
});
test("contain CommentBox", done => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  done();
});
test("contain CommentList", done => {
  expect(wrapped.find(CommentList).length).toEqual(1);
  done();
});
