import React, { Component } from "react";
import axios from "axios";
import "../styles.css";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    // console.log(this.props.url);

    axios.get(this.props.url).then(res => {
      this.setState({
        posts: res.data.articles.slice(0, 20)
      });
      // console.log(this.state.posts);
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
        <div className="post card" key={post.url}>
            
            <div className="card-content ">
              <a href={post.url} className="red-text">
                <span className="card-title">{post.title}</span>
              </a>
              <img
                src={post.urlToImage}
                alt="images"
                className="post-card__image "
                height="55%"
                width="60%"
              />
            </div>
            <p>{post.description}</p>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return <div className="container">{postList}</div>;
  }
}

export default Home;
