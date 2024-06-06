import Logo from "../shared/Logo";
import { MdHome,MdArrowOutward, MdOutlineWavingHand } from "react-icons/md";
import { IoIosInformationCircle,IoMdPricetag } from "react-icons/io";

const Navber = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(58,1,136,1) 0%, rgba(150,70,254,1) 100%)",
      }}
      className="max-w-[1301px] mx-auto rounded-[33px] px-10 py-2"
    >
      <div className="flex items-center justify-between">
        <Logo color={"text-white"} />
        <ul className="flex items-center gap-2">
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <MdHome className="text-xl" /> Home
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <IoIosInformationCircle className="text-xl" /> About Us
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <IoMdPricetag className="text-xl" /> Pricing
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <MdArrowOutward  className="text-xl" /> interioXr
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <MdArrowOutward className="text-xl" /> WebApp
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <MdArrowOutward className="text-xl" /> iOS/Android
            </a>
          </li>
          <li className="p-3 button rounded-[13.41px]">
            <a
              className="flex text-[14px] font-bold items-center"
              href=""
            >
              <MdOutlineWavingHand className="text-xl" /> Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
