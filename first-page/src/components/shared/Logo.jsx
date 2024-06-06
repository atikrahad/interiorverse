/* eslint-disable react/prop-types */
import logo from "../../assets/logo/logo.png";
const Logo = ({color}) => {
  return (
    <div className="flex items-center">
      <img className="w-20" src={logo} alt="Site logo" />
      <div className="">
        <h1 className={`text-4xl font-bold ${color}`}>interiorVerse</h1>
        <h4 className={`text-xl font-semibold ${color}`}>
          by interio<span className="font-extrabold">Xr™</span>
        </h4>
      </div>
    </div>
  );
};

export default Logo;
