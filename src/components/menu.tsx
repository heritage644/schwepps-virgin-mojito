import { sliderLists } from "../constants"
import React from "react"
import gsap from "gsap"
import { useRef } from "react";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function Menu (){


const contentRef =useRef(null)
   
   const [currentIndex, setCurrentIndex] = React.useState(0)
const totalCocktails = sliderLists.length;

    const goToSlide = (index: any)=>{
const newIndex = (index + totalCocktails ) % totalCocktails
setCurrentIndex(newIndex)
    }
const getCocktailAt = ({indexOffset}:any) =>{
return sliderLists[(currentIndex + indexOffset + totalCocktails)% totalCocktails]
}
    
    const currenCocktail:any= getCocktailAt({indexOffset:0})
const prevCocktail :any = getCocktailAt({indexOffset:-1})
const nextCocktail:any = getCocktailAt({indexOffset:1})





useGSAP(()=>{
    gsap.fromTo('#title',{
        opacity:0
    },
    {
        opacity:1,
        duration:1,
       
    }
)

gsap.fromTo('.cocktail',{
    opacity:0,
    xPercent:-100

},
{
     opacity:1,
     xPercent:0,
     ease:'power1.inOut',
     duration:1
        
        
}
)
gsap.fromTo('.details',{
     opacity:0,
   
},
{
 opacity:1,
        duration:1,
       
}
)


},[currentIndex])


    return(
        <><section id="menu" className="overflow-hidden" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
             <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
             <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
             </h2>
             <nav className="cocktail-tabs" aria-label="cocktail-navigtion">
                {sliderLists.map((newLists, index)=>{
                    const isActive = index === currentIndex
                    return (
                    <button key={newLists.id } className={`${isActive ? 'text-white border-white' : 'text-white/50'}`}
                    onClick={()=> goToSlide(currentIndex-1)}
                    >
                        {newLists.name}
                    </button>
                    
                )
                })}
             </nav>

             
             <div className="content">
                <div className="arrows">
                    <button className="text-left"   onClick={()=> goToSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className="text-left"   onClick={()=> goToSlide(currentIndex+ 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>

                </div>
                <div className="cocktail">
                    <img src={currenCocktail.image} alt="" />
                </div>
                <div className="recipe ">
                    <div ref={contentRef} className="info">
                        <p>Recipe for: </p>
                        <p id="title" className="pb-20">{ currenCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{ currenCocktail.title}</h2>
                        <p>{ currenCocktail.description}</p>
                    </div>
                </div>
             </div>
            </section></>
    )
}