import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});
test("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});
describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "hello"
      }
    });
    wrapped.update();
  });
  test("users can enter in textarea", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("hello");
  });
  test("users hit submit to empty text", () => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "hello"
      }
    });
    wrapped.update();
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
