import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b18e39dcff44fe999709f920eb3cda7"
      )
      .then(res => {
        this.setState({
          posts: res.data.articles
        });
        console.log(this.state.posts);
      });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.source.id}>
            <div className="card-content">
              <a href={post.url}>
                <span className="card-title">{post.title}</span>
              </a>
              <p>{post.description}</p>
            </div>
          </div>
        );
      })
    ) : (
        <div className="center">No posts yet</div>
      );
    return (
      <div className="container">
        <h4 className="center">Top headlines of the day!</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
