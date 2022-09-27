import React, {useState} from 'react';

const Post = ({postObject}) => {

    const [likeButtonClass, setLikeButtonClass] = useState("inactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState("inactive");

    function handleLikeClick() {
        if (likeButtonClass === "inactive"){
            setLikeButtonClass("liked");
            if (dislikeButtonClass === "disliked"){
                setDislikeButtonClass("inactive");
            }
        } else {
            setLikeButtonClass("inactive");
        }
    }

    function handleDislikeClick(){
        if (dislikeButtonClass === "inactive"){
            setDislikeButtonClass("disliked");
            if (likeButtonClass === "liked"){
                setLikeButtonClass("inactive");
            }
        } else {
            setDislikeButtonClass("inactive");
        }
    }

     return (
        // post contains a grid with 2 columns and three rows
        <div class="post">   

          
            <div class="name">{postObject.name}</div>
             
            
            <div class="timestamp">
                <div class="time">{postObject.time}</div>
                <div class="date">{postObject.date}</div>
            </div>

      
            <div class="body">{postObject.body}</div>
    

            <div class="empty-space"></div>
            <div class="empty-space"></div>
            
            <div class="buttonholder">
                <button class={likeButtonClass} onClick={handleLikeClick}>Like</button>
                <button class={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
            </div>
        </div>
    );
}
 
export default Post;