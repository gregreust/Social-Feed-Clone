import React from 'react';



const  WritePost = () => {
    return (  
        <div class="container">
            <form>
            <label>Name</label>
            <input type="text" required/>
            <label>Post</label>
            <textarea required/>
            <button>Create</button>
        </form>
        </div>
    );
}
 
export default WritePost;