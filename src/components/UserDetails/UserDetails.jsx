import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name, email, phone, website} = user
    return (
        
        <div>
            <h2 className="text-3xl">Details about user</h2>
            <p className="text-2xl">Name: {name}</p>
            <p className="text-2xl">Email: {email}</p>
            <p className="text-2xl">Phone: {phone}</p>
            <p className="text-2xl">Website: {website}</p>
        </div>
    );
};

export default UserDetails;