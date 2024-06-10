
import { useEffect, useState } from "react";
import { images } from "../assets/sliderImage";
import { Link  } from "react-router-dom";



export default function SliderImages() {

  const[currentIndex , setCurrentIndex] = useState(0);

  

useEffect(()=> {
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
} , 4000);

return () => clearInterval(interval)
} , [])


return (
<div className="">
<div className="bg-purple-50 w-full  mt-10 flex flex-col md:flex-row">
  
 
  <div className="bg-purple-50 w-full  m-0">
  <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="relative object-cover w-full h-70 mt-7 md:h-[500px] lg:h-[750px] rounded-lg" />
  </div>
  <div className="flex bg-purple-50 w-1/2  flex-col justify-center items-center gap-7 ml-20">
    
    <p className="text-center text-purple-900 ml-5 text-3xl md:text-5xl font-bold font-serif">{images[currentIndex].text}</p>
   <Link to='/ProductPage'>
    <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">Check Now
      </button></Link>

  </div>
 
</div>

</div>

)
}