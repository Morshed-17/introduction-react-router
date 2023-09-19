import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
        <h2>This is home</h2>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
