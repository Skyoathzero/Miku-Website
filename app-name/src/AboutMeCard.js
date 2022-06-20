import React from 'react'
import background from './image/cloud.jpg'
import char from './image/aboutme-char.png'
import avatar from './image/pfp.gif'
import {useState} from 'react';
import Tilty from 'react-tilty'
import {IoMdClose} from 'react-icons/io'
import {RiArrowGoForwardLine} from 'react-icons/ri'


export default function AboutMeCard({ open , close}) {
    const [isHoveringButton,setIsHoveringButton] = useState([false,null]);

    const hadleMouseIn = (e) =>{setIsHoveringButton([true,e.currentTarget.id]);}
    const hadleMouseOut = () =>{setIsHoveringButton([false,null]);}
    
    if (!open) { return <>
        
        <Tilty className="about-me-card-cnt about-closed" max='0'>
            <div id='about-me-close-btn' onClick={close} className='gradient-border'>
                    <IoMdClose id='about-me-close-icon'/>
            </div>
            <ul className="about-me-card-bottom-menu">
                <li id='discord' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                    <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png" alt="" />
                    <span className={isHoveringButton[0] ? isHoveringButton[1] == 'discord' ? 'hovered' : '' : ''}>Discord</span>
                </li>
                <li id='twitter' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                    <span className={isHoveringButton[0] ? isHoveringButton[1] == 'twitter' ? 'hovered' : '' : ''}>Twitter</span>
                </li>
                <li id='matrica' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                    <img src="https://pbs.twimg.com/profile_images/1442646213883535360/nX5X4u3w_400x400.jpg" alt="" />
                    <span className={isHoveringButton[0] ? isHoveringButton[1] == 'matrica' ? 'hovered' : '' : ''}>Matrica</span>
                </li>
            </ul>
        </Tilty>
    </>
        
    }
    else {
        return (
        <>
            {/* <div className="overlay"></div> */}
            
            <Tilty className="about-me-card-cnt" max={9.5} glare={true} maxGlare={0.5} > 
                <div id='about-me-close-btn' onClick={close} className='gradient-border'>
                    <IoMdClose id='about-me-close-icon'/>
                </div>
                <div className="about-me-title">
                    <p>About Me!</p>
                </div>
                <div className="about-me-content">
                    <p className='abtme-content-name'><span>SKYOATHSIGN</span> IS A</p>
                    <p className='abtme-content-student'>STUDENT</p>
                    <span className='abtme-content-dreamer'>DREAMER</span>
                    <p className='abtme-content-developer'>DEVELOPER</p>
                    <p className='abtme-content-3d'>3DARTIST</p>
                    <p className='abtme-content-nft'>NFTENTHUSIAST</p>
                    <p className='abtme-content-manga'>MANGA CONNOSEUR</p>
                </div>
                <div className="about-hover-me">
                    <b>Hover over me <RiArrowGoForwardLine id='about-point-down'/></b>
                </div>
                <ul className="about-me-card-bottom-menu">
                        <li id='discord' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'discord' ? 'hovered' : '' : ''}>Discord</span>
                        </li>
                        <li id='twitter' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'twitter' ? 'hovered' : '' : ''}>Twitter</span>
                        </li>
                        <li id='matrica' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://pbs.twimg.com/profile_images/1442646213883535360/nX5X4u3w_400x400.jpg" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'matrica' ? 'hovered' : '' : ''}>Matrica</span>
                        </li>
                </ul>
            </Tilty>
        </>
        )    
    }
}   
