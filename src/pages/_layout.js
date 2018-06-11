import Link from 'umi/link';

export default () =>
  <div>
    <h1>Routes</h1>
    <ul>
      <li><Link to="/list">/list (PrivateRoute)</Link></li>
      <li><Link to="/users">/users</Link></li>
      <li><Link to="/users/posts">/users/posts</Link></li>
      <li><Link to="/users/posts/post">/users/post</Link></li>
    </ul>
  </div>