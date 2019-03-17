import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

describe("save comment", () => {
  test("has a correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  test("has the correct payload", () => {
    const action = saveComment("hello");
    expect(action.payload).toEqual("hello");
  });
});
