import Navber from "../Navber/Navber";
import Banner from "./Banner/Banner";
import ProfileSection from "./profileSection/ProfileSection";
import UserData from "./User Data/UserData";


const Home = () => {
    return (
        <div className="font-lexed">
           <Navber></Navber> 
           <Banner></Banner>
           <ProfileSection></ProfileSection>
           <UserData></UserData>
        </div>
    );
};

export default Home;