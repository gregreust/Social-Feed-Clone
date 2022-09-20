import React, {useState} from 'react';

const  WritePost = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        // prevents page from refresh
        event.preventDefault(); 
        
        //NEED TO LOG DATE AND TIME HERE

        newPost = {name, body};          //send info to post list 
        props.addNewPostInfo(newPost);         //sends new post object to PostFeed
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