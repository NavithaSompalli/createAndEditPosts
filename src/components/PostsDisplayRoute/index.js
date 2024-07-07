import { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css'

class PostsDisplayRoute extends Component {
  state = {
    postsList: []
  };

  componentDidMount() {
    const results = localStorage.getItem('postsItemsList');
    if (results) {
      this.setState({ postsList: JSON.parse(results) });
    }
  }

  onClickEditButton = id => {
    localStorage.setItem('editPostId', id);
  }


  render() {
    const { postsList } = this.state;

    return (
      <div>
        {postsList.length > 0 ? (
          <ul className="post-card-list-container">
            {postsList.map(post => (
              <li key={post.id} className="post-item-card-container">
                <h2 className="title">{post.title}</h2>
                <p className="description">{post.description}</p>
                {post.imgUrl && <img src={post.imgUrl} alt={post.title} className="post-image-url"/>}
                <Link to='/editpost'>
                  <button onClick={() => this.onClickEditButton(post.id)} className="edit-btn">Edit</button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}

export default PostsDisplayRoute;
