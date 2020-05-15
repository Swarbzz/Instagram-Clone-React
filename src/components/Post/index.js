import React, { Component } from "react";
class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src="../../ME.jpg" alt="George" />
          </div>
          <div className="Post-user-nickname">
            <span>George</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt="Me drinking" scr="../../Me drinking.jpg" />
        </div>
      </div>
      <div className="Post-caption">
        <strong>George</strong> Drinking away quarantine!
      </div>
    </article>;
  }
}
export default Post;