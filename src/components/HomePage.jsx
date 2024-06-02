import { Carousel , Typography , Button , Navbar } from "@material-tailwind/react";
import ProductCards from "./ProductCards";
import { useEffect, useState } from "react";


const images = [
  {
    src:'https://www.politix.com.au/on/demandware.static/-/Library-Sites-PolitixSharedLibrary/default/dw6244cdf2/images/Blog/2021/10%20-%20Oct/Suit%20Colours%20%7C%20Find%20your%20colours/PLTX65_MA_Oct%20Blog%20Images_WK16_Tailoring_Landing%20Page%20FA.jpg',
    alt: 'image!' , 
    text: 'Clothing with Attitude',
    color: 'blue' , 
  },
  {
    src:'https://img.freepik.com/free-photo/happy-girl-with-blonde-hair-red-glasses-white-dress-holding-cool-handbag-pointing-place-text-pink-background_197531-28913.jpg',
    alt: 'image!' , 
    text: 'Always Be Different'
  },
  {
    src:'https://img.freepik.com/premium-photo/pink-headphone-black-cable-pastel-color-blue-pink-background-music-concept_24076-324.jpg',
    alt: 'image!' , 
    text: 'Power On'
  },
  {
    src:'https://png.pngtree.com/thumb_back/fw800/background/20220707/pngtree-fresh-yellow-fruits-and-vegetables-collection-on-a-blue-background-photo-image_37185890.jpg',
    alt: 'image!' , 
    text: 'A store for Health'
  },
]


export default function HomePage() {
  const[currentIndex , setCurrentIndex] = useState(0);


useEffect(()=> {
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
} , 2000);

return () => clearInterval(interval)
} , [])


return (
<div>
<div className="bg-blue-100 w-full m-0 flex flex-col md:flex-row">
  
 
  <div className="bg-blue-200 w-full m-0">
  <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="relative object-cover w-full h-66 md:h-[500px] lg:h-[600px]" />
  </div>
  <div className="flex bg-blue-100 w-1/2  flex-col justify-center items-center gap-7 ml-20">
    <h1 className="text-xl md:text-2xl font-serif font-semibold">OneStop Solution</h1>
    <p className="text-3xl md:text-5xl font-italic">{images[currentIndex].text}</p>
    <button className="font-spirax text-5xl md:text-6xl font-extralight">Check Exciting Deals!</button>
  </div>
</div>



</div>




  // <div id="mainDiv" className="border-4 border-black ">
   
  //   <div id="heroDiv" className=" flex flex-col lg:flex-row m-5 p-5">
  //   <div className="hidden lg:flex flex-row justify-between items-center bg-opacity-10 ">
  //         <h1 className="font-dancing text-5xl text-center xl:text-7xl font-bold text-gray-800">{images[currentIndex].text}</h1>
       
  //         <h2 className="font-dancing font-bold text-3xl  text-gray-900 py-4 px-8 rounded-md mt-4">Order Now!</h2>
  //       </div>
  //     <div id="imageDiv" className="w-screen h-screen ">
  //       <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="relative object-cover w-fit h-66 md:h-[500px] lg:h-[500px]" />
        
  //     </div>
     
      
  //     </div>
  //     <div className="relative z-10">
  //     <ProductCards />
  //   </div>
  // </div>
)
}