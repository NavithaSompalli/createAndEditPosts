import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreatePostRoute from './components/CreatePostRoute';
import HeaderRoute from './components/HeaderRoute';
import PostsDisplayRoute from './components/PostsDisplayRoute';
import EditPostRoute from './components/EditPostRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderRoute />
      <Switch>
        <Route path='/createpost' component={CreatePostRoute} />
        <Route path='/editpost' component={EditPostRoute} />
        <Route path='/' component={PostsDisplayRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
