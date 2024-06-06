/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/footerimg/img1.png";
import img2 from "../../assets/footerimg/img2.png";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <div className="max-w-[1301px] gap-10 pb-20 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* ============= footer logo name with description============== */}

      <div>
        <Logo color={"text-[#3C0089]"}/>
        <p className="pl-2 mt-5 text-[#808080] text-justify">
          Welcome to interiorVerse, where design dreams come to life in
          breathtaking virtual reality! Step into a world of hyper-realistic and
          fully immersive VR walkthroughs that redefine how we envision and
          create interior spaces. Welcome to interiorVerse – where your dream
          spaces await!
        </p>
      </div>

      {/* ============= footer get in touch section============== */}

      <div className="space-y-10 py-2">
        <h1 className="text-xl font-bold">Get in touch</h1>
        <div className="flex justify-start gap-3">
          <IoLocationOutline className="text-[#3C0089] -ml-5 text-3xl w-[20%]" />
          <p className="w-[80%] text-[#808080] font-semibold">
            1004, 10th Floor, Galleria Mkt., DLF Phase IV, Gurugram
          </p>
        </div>
        <div className="flex justify-start gap-3">
          <TfiEmail className="text-[#3C0089] -ml-5 text-start text-3xl w-[20%]" />
          <p className="w-[80%] text-[#808080] font-semibold">info@interioXr.com </p>
        </div>
        <div className="flex justify-start gap-3">
          <IoCallOutline className="text-[#3C0089] -ml-5 text-3xl w-[20%]" />
          <p className="w-[80%] text-[#808080] font-semibold">+91 9560013324</p>
        </div>
      </div>

      {/* ============= footer get in touch section============== */}

      <div className="space-y-7 py-2">
        <h1 className="text-xl font-bold">Recent Posts</h1>
        <div className="flex items-start gap-4">
          <img className="w-12 h-12 rounded-xl " src={img1} alt="" />
          <p className="text-[#333333] font-bold">
            "Designing in a New Dimension: Unleashing Your Creativity with
            interiorVerse"
          </p>
        </div>
        <div className="flex  gap-4">
          <img className="w-12 h-12 rounded-xl " src={img2} alt="" />
          <p className="text-[#333333] font-bold">
            "The Future of Design Visualization: Embracing Hyper-Realism with
            interiorVerse"
          </p>
        </div>
      </div>

      {/* ============= footer Newsletter section============== */}

      <div className="space-y-7 py-2">
        <h1 className="text-xl font-bold">Join Our Newsletter</h1>
        <form className="space-y-4">
          <div>
            <label className="px-5 text-[#808080]">Your email</label>
            <input
              className="px-5 w-full outline-none border py-3 rounded-full"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <input
            className="px-5 w-full text-[22.67px] font-bold outline-none border py-3 rounded-full"
            type="submit"
            value={"Subscribe"}
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
