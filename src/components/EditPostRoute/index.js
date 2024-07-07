import { Component } from "react";


class EditPostRoute extends Component{
  state = {
    title: '',
    description: '',
    imgUrl: '',
    postsList: []
  };

  componentDidMount() {
    const posts = localStorage.getItem('postsItemsList');
    console.log(posts)
    const editPostId = localStorage.getItem('editPostId');
    console.log(editPostId)

    if (posts) {
      const postsList = JSON.parse(posts);
      console.log(postsList)
      const postToEdit = postsList.find(post => post['id'] === editPostId);
      console.log(postToEdit)

      if (postToEdit) {
        this.setState({
          title: postToEdit.title,
          description: postToEdit.description,
          imgUrl: postToEdit.imgUrl,
          postsList
        });
      }
    }
  }

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
    const editPostId = localStorage.getItem('editPostId');

    const updatedPostsList = postsList.map(post =>
      post.id === editPostId
        ? { ...post, title, description, imgUrl }
        : post
    );

    this.setState({
      postsList: updatedPostsList,
      title: '',
      description: '',
      imgUrl: ''
    });

    localStorage.setItem("postsItemsList", JSON.stringify(updatedPostsList));
    this.props.history.push('/postsdisplay');
  };

  render(){
    const { title, description, imgUrl } = this.state;
    return(
      <div className="bg-container">
        <div className="card-container">
          <form onSubmit={this.onSubmitForm} className="form-container">
            <input 
              type="text" 
              placeholder="Edit title" 
              value={title} 
              onChange={this.onChangeTitle} 
              className="title-element"
            />
            <textarea 
              placeholder="Edit description" 
              value={description} 
              onChange={this.onChangeDescription} 
              className="description-element"
            />
            <input 
              type="text" 
              placeholder="Edit image URL" 
              value={imgUrl} 
              onChange={this.onChangeImgUrl} 
              className="img-url-element"
            />
            {imgUrl && <img src={imgUrl} alt="post" />}
            <button type="submit" className="submit-btn">Update Post</button>
          </form>
        </div>
      </div>
    )
  }
}


export default EditPostRoute