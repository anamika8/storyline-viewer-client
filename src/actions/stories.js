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

// Get all stories
export const GET_STORIES = "GET_STORIES";
export const getStories = stories => ({
  type: "GET_STORIES",
  stories
});

// Get one story
export const GET_STORY = "GET_STORY";
export const getStory = story => ({
  type: "GET_STORY",
  story
});

export const getAllStories = () => dispatch => {
  return (
    fetch(`${API_BASE_URL}/writings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      // Reject any requests which don't return a 200, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(getStories(data)))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          console.log("user.js error");
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};

export const getStory = id => (dispatch, getState) => {
  return (
    fetch(`${API_BASE_URL}/writings/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(getStory(data)))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          console.log("user.js error");
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};

export const addNewStory = story => (dispatch, getState) => {
  return (
    fetch(`${API_BASE_URL}/writings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(story)
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(getAllStories()))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          console.log("user.js error");
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};

export const updateStory = (values, id) => (dispatch, getState) => {
  return (
    fetch(`${API_BASE_URL}/writings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(getStories(id)))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          console.log("user.js error");
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};

export const deleteStory = id => (dispatch, getState) => {
  return (
    fetch(`${API_BASE_URL}/writings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(getAllStories())
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          console.log("user.js error");
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};