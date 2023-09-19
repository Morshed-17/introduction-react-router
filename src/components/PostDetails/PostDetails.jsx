import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {title, body} = post

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3 className="text-3xl">Title: {title}</h3>
            <p className="text-2xl">Body: {body}</p>
            <button onClick={handleGoBack} className="text-xl bg-orange-600 p-2 rounded-lg my-4 text-white font-bold">Go back</button>
        </div>
    );
};

export default PostDetails;