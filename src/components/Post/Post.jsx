import PropTypes from 'prop-types'
import {useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {id,title, body} = post
    const navigate = useNavigate()

    const handleShowDetail = () =>  {
        navigate(`/posts/${id}`)
    }

    return (
        <div className="border-2 p-6">
            <h3 className="text-2xl font-bold">Title: {title}</h3>
            <p className="text-xl">Details: {body}</p>
            <button className='bg-orange-600 text-white py-3 px-6 mt-4' onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};
Post.propTypes ={
    post : PropTypes.object
}

export default Post;