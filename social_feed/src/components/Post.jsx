import React from 'react';

const Post = ({postObject}) => {
     return (
        <div class="post">
            <div class="name">{postObject.name}</div>
            <div class="body">{postObject.body}</div>
            <div class="date">{postObject.date}</div>
            <div class="time">{postObject.time}</div>
            <button class="reaction" id="like">Like</button>
            <button class="reaction" id="dislike">Dislike</button>
        </div>
    );
}
 
export default Post;