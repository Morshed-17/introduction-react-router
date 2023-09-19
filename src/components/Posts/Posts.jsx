import { useLoaderData } from "react-router-dom";
import Post from "../Post/post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3 className="text-3xl">Posts: </h3>
            <div className="grid grid-cols-3 gap-6">
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Posts;