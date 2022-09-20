import React, {useState} from 'react';
import Post from './Post';

const  WritePost = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        // prevents page from refresh
        event.preventDefault(); 
        //logs date of post
        let newDate = moment(Date.now()).format(format1);
        setDate(newDate);   
        let newPost = {name, body, newDate};    //TO-DO: make post object with like and dislike buttons, add many post objects to postfeed
        props.addNewPost(newPost);         //sends new post to PostFeed
    }

    return (  
        <div class="container">
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required value={name} onChange={(event) => setName(event.target.value)}/>   
            {/*value links to useState above, onChange enables a new value to be set*/}
            <label>Post</label>
            <textarea required value={body} onChange={(event) => setBody(event.target.value)}/>
            <button>Create</button>
        </form>
        </div>
    );
}
 
export default WritePost;