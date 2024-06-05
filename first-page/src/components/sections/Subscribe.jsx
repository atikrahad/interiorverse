import avatar from "../../assets/subscribe/bedanimate.mp4";
import { FaRegCirclePlay } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="max-w-[1324px] mx-auto bg-[#1C0131] min-h-[972px] p-20 rounded-[4rem]">
      <div className="">
        <h1 className="text-end font-extrabold text-white -mb-32 text-[117.41px]">
          Subscribe To Our Updates
        </h1>
      </div>
      <div className="flex flex-col-reverse justify-between md:flex-row items-center">
        <video
          className="w-[657px]  float-left h-[537px]"
          src={avatar}
          autoPlay
          muted
          loop
        ></video>
        <div className=" w-full -mb-20">
          <p className="text-end md:pl-8 text-white text-3xl font-medium">
            Stay in the loop with latest developments as we welcome the future,
            together.
          </p>
          <div className="flex items-center justify-end py-5 gap-3 text-white">
            <FaRegCirclePlay/>
            <p>View Past Newsletters</p>
          </div>
          <form className="space-y-3 text-end">
            <input
              className="px-20 w-[75%] py-2 bg-transparent rounded-full border border-[#7055E6] outline-none"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="px-10 text-white py-2 -ml-10 rounded-full border bg-[#7055E6] border-[#7055E6] outline-none"
              type="submit"
              value="Signup!"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
