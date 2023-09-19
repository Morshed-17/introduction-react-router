import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h3 className="text-3xl">Opps !!! Someting went wrong</h3>
            {
                error.status === 404 && <div>
                    <h3 className="text-2xl font-semibold">Page Not Fount</h3>
                    <p className="text-xl font-bold">Go back to the home page</p>
                    <Link to="/"><button className="text-xl text-white font-bold bg-orange-600 p-2">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;