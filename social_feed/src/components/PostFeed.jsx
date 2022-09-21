import React from 'react';
import WritePost from './WritePost';
import App from '../App';


const PostFeed = (props) => {
    

    function displayPosts(props){
        for(let i=0; i<props.postsArray.length; i++){             //postsArray recieved from App
            <div class="name">{props.postsArray[i]}</div>
            
        }
    }
        
    return (
        <div class="post-feed-container"> 
            <displayPosts/>
        </div>
     );
}
 

export default PostFeed;