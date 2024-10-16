import speed from "../assets/footer/speed.png";
import play from "../assets/footer/play.png";
import replay from "../assets/footer/replay.png";
import mute from "../assets/footer/mute.png";
import back from "../assets/footer/back.png";
import next from "../assets/footer/next.png";
const Footer = () => {
  return (
    <footer className="bg-white h-28 flex justify-between">
      <div className="rightFoot flex">
        <img src={speed} alt="" className="h-28" />
        <img src={play} alt="" className="h-28" />
        <img src={replay} alt="" className="h-28" />
      </div>
      <div className="leftFoot flex items-center">
        <img src={mute} alt="" className="h-28" />
        <img src={back} alt="" className="h-28" />
        <h2 className="font-semibold text-2xl -mt-8">01/22</h2>
        <img src={next} alt="" className="h-28" />
      </div>
    </footer>
  );
  
};

export default Footer;
