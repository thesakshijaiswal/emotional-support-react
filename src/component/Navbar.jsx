import menubar from "../assets/navbar/menubar.png";
import logo from "../assets/navbar/logo.png";
import resources from "../assets/navbar/resources.png";
import navigation from "../assets/navbar/navigation.png";
import exit from "../assets/navbar/exit.png";
import banner from "../assets/navbar/banner.png"
const Navbar = () => {
  return (
    <>
    <nav className="bg-[#a993c5] h-24 flex justify-between">
      <div className="leftNav flex">
        <img src={menubar} alt="" className="h-24" />
        <img src={logo} alt="" className="h-24 p-5 bg-white" />
      </div>
      <div className="head font-semibold text-3xl flex items-center -ml-97">
        Introduction to the Emotional Support Module
      </div>
      <div className="rightNav flex">
        <img src={resources} alt="" />
        <img src={navigation} alt="" className="h-24" />
        <img src={exit} alt="" className="h-24" />
      </div>
    </nav>
    <div className="banner">
<img src={banner} alt="" className="w-full h-[77.5vh]"/>
    </div>
    <div className="h-[6px]"></div>
    </>
  );
};

export default Navbar;
