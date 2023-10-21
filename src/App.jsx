import { useState } from "react"
import img1 from "./asset/arabian-ranches.jpg"
import img2 from "./asset/arabian-ranches-ii.jpg"
import img3 from "./asset/downtown-dubai.jpg"
import img4 from "./asset/dubai-hills-estate.jpg"
import img5 from "./asset/dubai-marina.png"
import img6 from "./asset/emirates-living.jpg"
import Card from "./components/Card"
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import "./App.css"

const data = [
  {
    id:1,
    cardImage: img1,
    cardContent: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
    cardFooter: "Arabian Ranches"
  },
  {
    id:2,
    cardImage: img2,
    cardContent:"Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
    cardFooter:"Arabian Ranches II"
  },
  {
    id:3,
    cardImage: img3,
    cardContent:"The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
    cardFooter:"Downtown Dubai"
  },
  {
    id:4,
    cardImage: img4,
    cardContent:"Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
    cardFooter:"Dubai Hills Estate"
  },
  {
    id:5,
    cardImage: img5,
    cardContent:"Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
    cardFooter:"Dubai Marina"
  },
  {
    id:6,
    cardImage: img6,
    cardContent:"Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
    cardFooter:"Emirates Living"
  },
]

const App = () => {

  const [slideNo,setSlide] = useState(0)

  const handleRight = () => {
    setSlide(prevValue => prevValue+1)
  }

  const handleLeft = () => {
    setSlide(prevValue => prevValue-1)
  }

  return(
    <div className="bg-white">
      <div>
        <h1 className="mb-7 font-semibold text-xl/[30px] text-[#887C68] text-center font-['Martel_Sans']">COMMUNITIES WE MANAGE</h1>
        <div className="flex flex-col justify-center items-center md:flex md:flex-row md:flex-wrap mb-32">
          {
            data.map((eachCard) => <Card eachCard={eachCard} key={eachCard.id}/>)
          }
        </div>
      </div>
      <div>
        <h1 className="mb-7 font-semibold text-xl/[30px] text-[#887C68] text-center font-['Martel_Sans']">OUR SERVICES</h1>
        <div className="flex flex-row justify-center items-center p-7">
          <button onClick={handleLeft} disabled={slideNo === 0 ? true:false} className="bg-[#F6F6F6] w-[40px] h-[40px] p-1 text-[30px] shadow-[0px_4px_4px_0px_#00000040]"> <BiChevronLeft/> </button>
            <div className="flex flex-row flex-wrap justify-center items-center">
              {
                data.slice(slideNo,slideNo+3).map((eachItem) => 
                (
                  <div>
                    <img src={eachItem.cardImage} className="m-4 w-[300px] h-[350px]"/>
                    <p className="text-[#ffffff] font-semibold text-[28px]/[32px] font-['Martel_Sans'] relative bottom-12">{eachItem.cardFooter}</p>
                  </div>  
                ))}
            </div>
          <button onClick={handleRight} disabled={slideNo+3 === 6 ? true:false} className="bg-[#F6F6F6] w-[40px] h-[40px] p-1 text-[30px] shadow-[0px_4px_4px_0px_#00000040]"> <BiChevronRight/> </button>
        </div>
      </div>
    </div>
  )
}

export default App