import { NavLinks } from "../constants"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
export default function NavBar (){
useGSAP(()=>{
    const navTween = gsap.timeline({
        scrollTrigger:{
            trigger: 'nav',
            start:'bottom top'
        }
    });

    navTween.fromTo('nav',{ backgroundColor:'transparent'},{
            backgroundColor:'#00000050',
            backgroundFilter:'blur(10px)',
            duration:1,
            ease:'power1.inOut'
        

    });
})

    return(
    <>
    <nav >
        <div >
            <a href="#home"  className="gap-2 flex items-center">
                <img src="/images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
               {NavLinks.map((Navs) =>(
                <li key={Navs.id}>{Navs.title}</li>
               ))}
            </ul>
        </div>
    </nav>
    
    
    </>
    )
}