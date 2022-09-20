import React from 'react';
import WritePost from './WritePost';




const PostFeed = () => {
    
    const [posts, setPosts] = useState();

    function addNewPost(post){ //recieves post from WritePost
        let tempPostFeed = [post, ...posts]; //puts new post in fromt of all original posts
        setPosts(tempPostFeed);
    }
    return ( 
        for (let key in posts){    //do I need to loop through posts to display them? 

        }
     );
}
 

export default PostFeed;