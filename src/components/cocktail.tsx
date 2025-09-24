import { cocktailLists } from "../constants"
import { mockTailLists } from "../constants"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)
export default function Cocktail (){

    useGSAP(()=>{
gsap.timeline({
    scrollTrigger:{
       trigger:'#hero',
        start:'30%',
        end:'bottom 80%',
        scrub:true,
    }
})

.from('#c-right-leaf',{ y: 100 , x:100 }  )
.from('#c-left-leaf',{ y: -100, x:-100 })
    })







    return(
        <>
        <section id="cocktails" className="noisy">
          
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" className="hidden md:block"/>
             <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" className="hidden md:block" />

             <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails</h2>
                    <ul>
                        {cocktailLists.map((cocks)=>(
                            <li key={cocks.name}>
                                <div className="md:me-28">
                                    <h3>{cocks.name}</h3>
                                    <p>{cocks.country} | {cocks.detail}</p>
                                    <span>-{cocks.price}</span>



                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="loved">
                    <h2>Most Loved Mocktails</h2>
                    <ul>
                        {mockTailLists.map((Mocks)=>(
                            <li key={Mocks.name}>
                                <div className="me-28">
                                    <h3>{Mocks.name}</h3>
                                    <p>{Mocks.country} | {Mocks.detail}</p>
                                    <span>-{Mocks.price}</span>



                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
        </section>
        </>
    )
}