import React from "react";
import { connect } from "react-redux";

import { getAllStories } from "../actions/stories";

export function StoriesSummary(props) {
  console.log("Is the user logged in? - " + props.loggedIn);
  const allStories = getAllStories();
  const totalStoriesCount = allStories.length;
  const storyCountWord = totalStoriesCount === 1 ? "story" : "stories";
  const viewStoryCount = totalStoriesCount > 5 ? 5 : totalStoriesCount;
  console.log("Number of total stories = " + totalStoriesCount);
  return (
    <div className="story-view-summary u-margin-bottom-small fade-in-bottom">
      <p className="story-view-summary__text">
        Viewing {viewStoryCount} {storyCountWord} out of {totalStoriesCount}{" "}
        available {storyCountWord}
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  protectedData: state.protectedData.data
});

export default connect(mapStateToProps)(StoriesSummary);
