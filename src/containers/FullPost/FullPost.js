import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = (props) => {

    const [err,
        setError] = useState(false)
    const [postToReceived,
        setPostToReceived] = useState('')

    useEffect(() => {
        if (props.id) {
            const goFetch = async() => {
                try {
                    const response = await axios.get('posts/' + props.id);
                    setPostToReceived(response.data)
                } catch (error) {
                    setError(true)
                }
            }
            goFetch()
        }
    }, [props.id])

    console.log(err) // another way implemented


    const deletePost = async() => {
        const response= await axios.delete('posts/' + props.id);
        console.log(response)
    }

    let post = <p style={{
        textAlign: "center"
    }}>Please select a Post!</p>;

    if (props.id) {
        post = (
            <div className="FullPost">
                <h1>{postToReceived.title}</h1>
                <p>{postToReceived.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={deletePost}>Delete</button>
                </div>
            </div>
        );
    }

    return post;

}

export default FullPost;