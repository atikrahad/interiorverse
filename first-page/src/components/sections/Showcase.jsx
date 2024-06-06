import Showcasecards from "../others/Showcasecards";

const Showcase = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[42px] w-fit font-bold mx-auto px-10 py-2 rounded-full text-[#340253] bg-[#D9D9D9]">
          Explore Our Virtual Realities:
        </h1>
        <h3 className="text-center mt-7 text-7xl text-white">
          The <span className="font-bold underline">interiorVerse</span>{" "}
        </h3>
        <h3 className="text-center text-7xl text-white">Showcase Collection</h3>
      </div>
      <div className="flex items-center justify-between max-w-[1440px] h-[681px] mx-auto rounded-[2rem]  mt-20 overflow-hidden">
        <div className="w-full h-full bg-[#1F0037]">
          <div className="p-[89px]">
            <p className="text-[#E6E6E6] font-[300] text-justify text-2xl leading-10">
              Welcome to the{" "}
              <span className="font-bold">
                interiorVerse Showcase Collection.
              </span>{" "}
              Step into a world of{" "}
              <span className="font-bold">imagination</span> with our VR
              environments. From chic bedrooms to modern kitchens, our{" "}
              <span className="font-bold">showcases inspire & captivate.</span>{" "}
              <br /> <br />
              Perfect for architects, designers, & homeowners, our VR
              walkthroughs bring{" "}
              <span className="font-bold">your visions to life</span> with
              stunning <span className="font-bold">realism.</span>
            </p>
            <button className="px-4 py-2 rounded-full bg-[#7F1DFF] text-white font-bold my-10">
              See Playlist
            </button>
          </div>
        </div>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(69,7,120,1) 0%, rgba(31,0,55,1) 100%)",
          }}
          className="w-full overflow-hidden h-full"
        >
            <Showcasecards/>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

