import comments from "reducers/commentsReducer";
import { SAVE_COMMENT } from "actions/types";

test("handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };
  const newState = comments([], action);
  expect(newState).toEqual(["new comment"]);
});

test("handles action with unknown type", () => {
  const state = comments([], {});
  expect(state).toEqual([]);
});
