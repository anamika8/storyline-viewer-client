import uuid from "uuid";

// ADD_STORY
export const ADD_STORY = "ADD_STORY";
export const addStory = ({
  title = "",
  content = "",
  author = "",
  postedAt = 0,
  updatedAt = 0
} = {}) => ({
  type: "ADD_STORY",
  story: {
    id: uuid(),
    title,
    content,
    author,
    postedAt,
    updatedAt
  }
});

// REMOVE_STORY
export const REMOVE_STORY = "REMOVE_STORY";
export const removeStory = ({ id }) => ({
  type: "REMOVE_STORY",
  id
});

// EDIT_STORY
export const EDIT_STORY = "EDIT_STORY";
export const editStory = (id, updates) => ({
  type: "EDIT_STORY",
  id,
  updates
});

export const GET_STORIES = "GET_STORIES";
export const getStories = stories => ({
  type: "GET_STORIES",
  stories
});

export const GET_STORY = "GET_STORY";
export const getStory = story => ({
  type: "GET_STORY",
  story
});

export const getAllStories = () => dispatch => {
  dispatch(getStories());

  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        const { code } = err;
        const message =
          code === 401
            ? "Incorrect username or password"
            : "Unable to login, please try again";
        dispatch(authError(err));
        // Could not authenticate, so return a SubmissionError for Redux
        // Form
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  );
};
