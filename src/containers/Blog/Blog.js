import React from 'react';
import {Route, Link} from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.scss';

const Blog = () => {
    return (
        <div>
            <div className="navBar">
                <ul className="navBarList">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/NewPost'>New Post</Link>
                    </li>
                </ul>
            </div>
            <Route path='/' exact component={Posts}/>
            <Route path='/NewPost' component={NewPost}/>
        </div>
    );

}

export default Blog;