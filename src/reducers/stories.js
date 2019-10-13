// Stories Reducer
const storiesReducerDefaultState = [];

const storiesReducer = (state = storiesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_STORY":
      return [...state, action.story];
    case "REMOVE_STORY":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_STORY":
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
    default:
      return state;
  }
};

export default storiesReducer;
