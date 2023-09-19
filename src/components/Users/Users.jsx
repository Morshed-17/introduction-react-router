import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Users data {users.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            </div>
        </div>
    );
};

export default Users;