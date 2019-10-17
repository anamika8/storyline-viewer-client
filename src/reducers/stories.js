import {
  ADD_STORY,
  REMOVE_STORY,
  EDIT_STORY,
  GET_STORIES,
  GET_STORY
} from "../actions/stories";

// Stories Reducer
const storiesReducerDefaultState = [];

const storiesReducer = (state = storiesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_STORY:
      return [...state, action.story];
    case REMOVE_STORY:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_STORY:
      return state.map(story => {
        if (story.id === action.id) {
          return {
            ...story,
            ...action.updates
          };
        } else {
          return story;
        }
      });
    case GET_STORIES:
      return {
        ...state,
        stories: action.stories,
        error: null
      };
    case GET_STORY:
      return {
        ...state,
        story: action.story,
        error: null
      };
    default:
      return state;
  }
};

export default storiesReducer;
