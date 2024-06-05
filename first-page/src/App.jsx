import Footer from "./components/sections/Footer"
import Reviews from "./components/sections/Reviews"
import Subscribe from "./components/sections/Subscribe"


function App() {

  return (
    <div className="bg-black">
      <div className="max-w-[1440px] rounded-b-[4rem] mx-auto bg-[#F9EBFF]">
        <div className="min-h-[80vh] py-10 bg-[#340253] rounded-b-[4rem]">
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
