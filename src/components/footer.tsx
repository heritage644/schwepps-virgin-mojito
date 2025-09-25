import { openingHours } from "../constants"
import { socials } from "../constants"
import gsap from "gsap"

import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)
export default function Footer (){

    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{type: 'words'})

     const timeline  = gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:'top center'

        },
           ease:'power1.inOut'
        })
        timeline
        .from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.05,
            
        })
        .from('#contact h3, #contact p',{
             opacity:0,
            yPercent:100,
            stagger:0.08,
        })
    })
    return(
        <>
        <footer className="" id="contact">
            <img src="images/footer-right-leaf.png" alt="leave-right" id="f-right-leaf" />
            <img src="images/footer-left-leaf.png" alt="leave-left" id="f-left-leaf" />
            <div className="content">
                 <h2>Where to Find Us</h2>
                 <div>
                    <h3>Visit our store</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                 </div>
                 <div>
                    <h3>Contact us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>

                 </div>

                 <div>
                    <h3>Open every day</h3>

                    {openingHours.map((hours, index)=>(
                        <p key={index}>{hours.day} : {hours.time}</p>
                    ))}
                 </div>

                 <div>
                    <h3>
                        Socials
                       <div className="flex items-center justify-center pt-4">
                        {socials.map((social)=>(
                        <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer"
                        aria-label="social.name"
                        > </a>

                        ))} <img src="images/socials.png" alt="" /></div>
                        
                    </h3>

                 </div>

                 


            </div>
           

        </footer>
        </>
    )
}