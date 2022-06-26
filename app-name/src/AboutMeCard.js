import React from 'react'
import {useState} from 'react';
import Tilty from 'react-tilty'
import {IoMdClose} from 'react-icons/io'
import {RiArrowGoForwardLine} from 'react-icons/ri'


export default function AboutMeCard({ open , close}) {
    const [isHoveringButton,setIsHoveringButton] = useState([false,null]);

    const hadleMouseIn = (e) =>{setIsHoveringButton([true,e.currentTarget.id]);}
    const hadleMouseOut = () =>{setIsHoveringButton([false,null]);}
    
    if (!open) { return <>
        
        <Tilty className="about-me-card-cnt about-closed" max={9.5} glare={true} maxGlare={0.5} > 
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
                        <li id='twitter' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'twitter' ? 'hovered' : '' : ''}><a href='https://twitter.com/skyoathsaint'>Twitter</a></span>
                        </li>
                        <li id='matrica' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://pbs.twimg.com/profile_images/1442646213883535360/nX5X4u3w_400x400.jpg" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'matrica' ? 'hovered' : '' : ''}><a href='https://matrica.io/skyoathsign'>Matrica</a></span>
                        </li>
                        <li id='github' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'github' ? 'hovered' : '' : ''}><a href='https://github.com/Skyoathzero'>Github</a></span>
                        </li>
                        <li id='gmail' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/320px-Gmail_icon_%282020%29.svg.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'gmail' ? 'hovered' : '' : ''}><a href='https://mail.google.com/mail/u/0/?fs=1&to=skyoathzero@gmail.com&su=SUBJECT&body=BODY&bcc=skyoathzero@gmail.com&tf=cm'>Email</a></span>
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
                        <li id='twitter' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'twitter' ? 'hovered' : '' : ''}><a href='https://twitter.com/skyoathsaint'>Twitter</a></span>
                        </li>
                        <li id='matrica' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://pbs.twimg.com/profile_images/1442646213883535360/nX5X4u3w_400x400.jpg" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'matrica' ? 'hovered' : '' : ''}><a href='https://matrica.io/skyoathsign'>Matrica</a></span>
                        </li>
                        <li id='github' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'github' ? 'hovered' : '' : ''}><a href='https://github.com/Skyoathzero'>Github</a></span>
                        </li>
                        <li id='gmail' onMouseEnter={hadleMouseIn} onMouseLeave={hadleMouseOut}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/320px-Gmail_icon_%282020%29.svg.png" alt="" />
                            <span className={isHoveringButton[0] ? isHoveringButton[1] == 'gmail' ? 'hovered' : '' : ''}><a href='https://mail.google.com/mail/u/0/?fs=1&to=skyoathzero@gmail.com&su=SUBJECT&body=BODY&bcc=skyoathzero@gmail.com&tf=cm'>Email</a></span>
                        </li>
                </ul>
            </Tilty>
        </>
        )    
    }
}   
