import React from 'react';

const Post = (props) => {
    return ( 
        props.name
        props.text
        <button class="reaction" id="like"></button>
        <button class="reaction" id="dislike"></button>
    );
}
 
export default Post;