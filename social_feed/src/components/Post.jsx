import React from 'react';

const Post = (props) => {
     return (
        <div class="post">
            <div class="name">{props.name}</div>
            <div class="body">{props.body}</div>
            <div class="date-info">date</div>
            <div class="time-info">time</div>
            <button class="reaction" id="like">Like</button>
            <button class="reaction" id="dislike">Dislike</button>
        </div>
    );
}
 
export default Post;