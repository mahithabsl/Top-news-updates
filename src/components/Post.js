import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4b18e39dcff44fe999709f920eb3cda7" + id).then(res => {
      this.setState({
        post: res.data
      });
      console.log("hi");

      console.log(res);
    });
  }
  render() {
    return (
      <div className="container">
        <h4> </h4>
      </div>
    );
  }
}
export default Post;
