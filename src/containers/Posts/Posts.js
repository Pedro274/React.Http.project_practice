import React, {useEffect,useState}from 'react';
import './Posts.scss';
import Post from '../../components/Post/Post'
import axios from 'axios';

function Posts() {

    const [state,
        setState] = useState({post: []})
    const [postId,
        setPostId] = useState(null);
    const [error,
        setError] = useState(false);

    useEffect(() => {
        const urlToFetch = async() => {
            try {
                const response = await axios.get('/posts');
                const posts = response
                    .data
                    .slice(0, 4)
                const upDatePost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Pedro'
                    }
                })
                setState({post: upDatePost})
            } catch (error) {
                setError(true)
            }
        }
        urlToFetch()
    }, [])

    const handleClickedPost = (postId) => {
        setPostId(postId)
    }

    const posts = (!error)
        ? state
            .post
            .map((post) => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => handleClickedPost(post.id)}/>
            })
        : <p style={{
            textAlign: "center"
        }}>Something went wrong</p>



    return (
        <div>
            <section className="Posts">
                {posts}
            </section>
        </div>
    )
}

export default Posts
