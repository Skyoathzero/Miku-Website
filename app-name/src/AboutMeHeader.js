import React from 'react'
import background from './image/cloud-anime.gif'
import { useContext } from 'react'
import pfp from './image/miku.gif'
import pfp_static from './image/miku-static.png'
import {useState} from 'react';
import {BsFillTriangleFill} from 'react-icons/bs'



export default function AboutMeHeader({ContextApi}) {
    const openAboutMe = useContext(ContextApi)
    const [isHoveringPfp,setIsHoveringPfp] = useState(false);    
    const hadleMouseIn = () =>{setIsHoveringPfp(true);}
    const hadleMouseOut = () =>{setIsHoveringPfp(false);}
    
    
    return (
        <>
            <div className='about-header-cnt' style={{backgroundImage:`url(${background})`}}>
                <section className='about-header-pfp' 
                            onClick={()=>{openAboutMe.setIsOpen(!openAboutMe.isOpen)}} 
                            style={isHoveringPfp ? {backgroundImage:`url(${pfp}`} :  {backgroundImage:`url(${pfp_static}`}} 
                            onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                        {isHoveringPfp ?<>

                            <div className='about-header-click-me'>click on me</div>
                            <BsFillTriangleFill className='triangle-header'></BsFillTriangleFill>
                        </> 
                        : ''}
                        <div className="about-header-info">
                            <p>
                                Aozora.sol<span>#420</span>
                            </p>
                        </div>
                        <p className='about-header-text'>
                            PROFILE CARD 
                        </p>
                </section>
            </div>
        </>

    )
}


