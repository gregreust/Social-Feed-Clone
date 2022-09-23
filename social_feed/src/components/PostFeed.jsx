import React from 'react';
import Post from './Post';


const PostFeed = ({postsArray}) => {
    


    return (
        <ul class="feed-list"> 
            {postsArray.map(post => <li><Post postObject={post}/></li>)}
        </ul>
     );
}
 

export default PostFeed;