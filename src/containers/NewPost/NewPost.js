import React, {useState} from 'react';
import axios from 'axios'

import './NewPost.css';

const NewPost = (props) => {
    const [state,
        setState] = useState({title: '', content: '', author: 'Max'});

    const objToSend = {
        title: state.title,
        content: state.content,
        author: state.author
    }
    
    const handleSubmit = async() => {
        const response = await axios.post('/posts', objToSend);
        console.log(response)
    }

    return (
        <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={state.title} onChange={(event) => setState({...state, title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={state.content} onChange={(event) => setState({...state, content: event.target.value})} />
                <label>Author</label>
                <select value={state.author} onChange={(event) => setState({...state, author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={handleSubmit}>Add Post</button>
            </div>
    );
}

export default NewPost;