import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className="border-2  p-6">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p className='mb-6'>Phone: {phone}</p>
            <Link className='bg-orange-600 text-white py-3 px-6' to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}

export default User;