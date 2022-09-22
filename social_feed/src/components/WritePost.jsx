import React, {useState} from 'react';


const  WritePost = ({addNewPostInfo}) => {

    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (event) => {
        // prevents page from refresh
        event.preventDefault(); 
        
        //Logging date and time of submit event
        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
        const time = `${current.getHours()}:${current.getMinutes()+1}`;

        let newPost = {name, body, date, time};          //collect info in object variable 
        addNewPostInfo(newPost);                         //sends post object to App
    }

    return (  
        <div class="form-container">
            <form onSubmit={handleSubmit}>
            <div class="form-top">
                <label>Name</label>
                {/*value links to useState above, onChange enables a new value to be set*/}
                <input type="text" required value={name} onChange={(event) => setName(event.target.value)}/>   
            </div>
            
            <div class="form-bottom">
                <label>Post</label>
                <textarea required value={body} onChange={(event) => setBody(event.target.value)}/>
                <button>Create</button>
            </div>
            
        </form>
        </div>
    );
}
 
export default WritePost;