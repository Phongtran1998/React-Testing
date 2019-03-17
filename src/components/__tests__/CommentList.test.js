import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;
beforeEach(() => {
  const initialState = { comments: ["hello", "hi"] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});
test("create one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

test("shows a text for each comment", () => {
  expect(wrapped.render().html()).toContain("<li>hello</li>");
  expect(wrapped.render().html()).toContain("<li>hi</li>");
});
