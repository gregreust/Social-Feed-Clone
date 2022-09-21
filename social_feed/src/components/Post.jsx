import React from 'react';

const Post = ({postObject}) => {
     return (
        <div class="post">
            <div class="name">{postObject.name}</div>
            <div class="body">{postObject.body}</div>
            <div class="date-info">date</div>
            <div class="time-info">time</div>
            <button class="reaction" id="like">Like</button>
            <button class="reaction" id="dislike">Dislike</button>
        </div>
    );
}
 
export default Post;