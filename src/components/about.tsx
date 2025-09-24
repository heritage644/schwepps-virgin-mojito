import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin( ScrollTrigger)

export default function About (){



    useGSAP(()=>{
       const titleSplit = new SplitText('#about h2',{type:'words' })

       const scrollTimeline =gsap.timeline({
        scrollTrigger:{
            trigger:'#about',
            start:'top center',
        }
       })
       scrollTimeline
       .from(titleSplit.words,{
        opacity:0,
        duration:1,
        ease:'expo.out',
        yPercent:100,
        stagger:0.02
       })
.from('.top-grid div, .bottom-grid div',{
    opacity:0, duration:1, ease:'power1.inOut',stagger:0.04
},'-=0.5')
    })

    return(
        <>
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best cocktails</p>
                        <h2>Where every detail matters
                        <span className="text-white">-</span> from muddle to garnish</h2>
                    </div>
                    <div className="sub-content"> 
                        <p>The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness.
                             Shaken, frozen, or on the rocks—it's always crisp & refreshing. Shaken, frozen, or on the rocks—it's
                              always crisp</p>
                            <div>
                                  <p className="md:text-3xl text-xl font-bold"><span>4.5</span>/5</p>
                                  <p className="text-sm text-white-100"> More than 120000+ customers</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt="grid.img" />

                    
                </div>
                  <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt="grid.img2" />

                    
                </div>
                  <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt="grid.img3" />

                    
                </div>
            </div>
              <div className="bottom-grid">
                      <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt="grid.img" />
                </div>
                  <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt="grid.img-4" />

                    
                </div>
                </div>
        </div>
        </>
    )
}