import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "./dummy-data";
import styled from "styled-components";

const PostPageAppWrapper = styled.div``;

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instaData: [],
      username: ""
    };
  }

  componentDidMount() {
    this.setState({ instaData: dummyData });
  }

  render() {
    return (
      <PostPageAppWrapper className="App">
        <SearchBar instagramData={this.state.instaData} />
        <PostContainer comments={this.state.instaData} />
      </PostPageAppWrapper>
    );
  }
}

export default PostsPage;
