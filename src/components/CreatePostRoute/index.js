import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './index.css';

class CreatePostRoute extends Component {
  state = {
    title: '',
    description: '',
    imgUrl: '',
    postsList: [],
    isClose: true,
  };

  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  onChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  onChangeImgUrl = event => {
    this.setState({ imgUrl: event.target.value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    const { title, description, imgUrl, postsList } = this.state;
    const newPost = { id: uuidv4(), title, description, imgUrl };
    const updatedPostsList = [...postsList, newPost];
    console.log(updatedPostsList)
    this.setState({
      postsList: updatedPostsList,
      title: '',
      description: '',
      imgUrl: ''
    });
   
    console.log(postsList)
  };

  onCloseForm = () => {
    this.setState(prevState => ({
      isClose: !prevState.isClose,
    }));
  };

  render() {
    const { title, description, imgUrl, isClose,postsList } = this.state;
    localStorage.setItem("postsItemsList", JSON.stringify(postsList));
    return (
      <div className="bg-container">
        <div className={isClose ? "card-container close" : "card-container open"}>
          <div className="close-btn-container">
            <p className="main-heading">Create a post</p>
            <div>
              <button type="button" onClick={this.onCloseForm} className="close-btn">Close</button>
            </div>
          </div>
          <form onSubmit={this.onSubmitForm} className="form-container">
            <input 
              type="text" 
              placeholder="Add title" 
              value={title} 
              onChange={this.onChangeTitle} 
              className="title-element"
            />
            <textarea 
              placeholder="Add description" 
              value={description} 
              onChange={this.onChangeDescription} 
              className="description-element"
            />
            <input 
              type="text" 
              placeholder="Add image URL" 
              value={imgUrl} 
              onChange={this.onChangeImgUrl} 
              className="img-url-element"
            />
            {imgUrl && <img src={imgUrl} alt="post" />}
            <button type="submit" className="submit-btn">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePostRoute;
