import { Navbar } from "../../components/navbar";
import "./Home.css";

export const Home = () => {
  const userType = localStorage.getItem("guest_type");

  return (
    <div className="App">
      <Navbar />
      <p> your guest type is {userType}</p>
    </div>
  );
};

export default Home;
