import Collection from "./components/sections/Collection"
import Footer from "./components/sections/Footer"
import Navber from "./components/sections/Navber"
import Reviews from "./components/sections/Reviews"
import Showcase from "./components/sections/Showcase"
import Subscribe from "./components/sections/Subscribe"


function App() {

  return (
    <div className="bg-black">
      <div className="max-w-[1440px] rounded-b-[4rem] mx-auto bg-[#F9EBFF]">
        <div className="min-h-[80vh] pb-20 bg-[#340253] rounded-b-[4rem]">
          <Navber/>
          <Showcase/>
          <Collection/>
          <Reviews/>
          <Subscribe/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
