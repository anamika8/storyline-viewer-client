import uuid from "uuid";

// ADD_STORY
export const addStory = ({
  title = "",
  entry = "",
  storyType = "",
  createdAt = 0
} = {}) => ({
  type: "ADD_STORY",
  dream: {
    id: uuid(),
    title,
    entry,
    storyType,
    createdAt
  }
});

// REMOVE_STORY
export const removeStory = ({ id }) => ({
  type: "REMOVE_STORY",
  id
});

// EDIT_STORY
export const editStory = (id, updates) => ({
  type: "EDIT_STORY",
  id,
  updates
});
