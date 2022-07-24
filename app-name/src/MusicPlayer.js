import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import './musicplayer.css'
import Draggable from 'react-draggable';
import { GrPauseFill, GrPlayFill } from 'react-icons/gr'
import { AiFillForward, AiFillBackward } from 'react-icons/ai'
import $, { data } from 'jquery';
import Slider from 'rc-slider';
import { BsFillVolumeUpFill, BsArrowsAngleExpand, BsFillCaretDownFill } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'rc-slider/assets/index.css';
const formatTime = require('format-duration')


function MusicPlayer() {
    const playerRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [isMuted, setMuted] = useState(false);
    const [index, setIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [progessObj, setProgressObj] = useState({});
    const [playerState, setPlayerState] = useState(1) // 0 closed , 1 small , 2 full
    const [que, setQue] = useState(['https://www.youtube.com/watch?v=Wt0Z3DSMGSk', 'https://www.youtube.com/watch?v=Vv_9kgnoFSM&', 'https://www.youtube.com/watch?v=Fc-5d7V1Rjg'])
    const [currentTime, setCurrentTime] = useState(0)
    useEffect(() => {
        $.getJSON('https://noembed.com/embed',
            { format: 'json', url: que[index] }, function (data) {
                setVidData(data);
                console.log(vidData)
            })
    }, [index]);
    const [vidData, setVidData] = useState()


    return (
        <>
            <ReactPlayer
                ref={playerRef}
                progressInterval={100}
                volume={volume}
                playing={isPlaying}
                muted={isMuted}
                url={que[index]}
                className="player"
                width="0px"
                height="0px"
                onDuration={(d) => setDuration(d)}
                onProgress={(o) => {
                    setProgressObj(o);
                    setCurrentTime(playerRef.current.getCurrentTime());
                }}
                onEnded={() => {
                    if (que.length == 0) {
                        return null;
                    }
                    if (index == que.length - 1) {
                        setIndex(0)
                        return null;
                    }
                    setIndex(index + 1)
                }} />

            {playerState == 2 ?
                <div className="mega-music-cnt">
                    <div className="mega-music-thumbnail" style={{ 'backgroundImage': `url('http://img.youtube.com/vi/${que[index].split("v=")[1].split("&")[0]}/maxresdefault.jpg')` }}>
                        <div className="mega-music-info-cnt-2"></div>
                        <div className="mega-music-info-cnt"></div>
                        
                        <div className="mega-music-icon">
                            <SiApplemusic />
                        </div>


                        {/* <div className='mega-music-title' style={{backgroundColor:''}}>{vidData === undefined ? 'undefined' : <p>{vidData.title}</p> }</div> */}
                        <div className="mega-music-menu-btm-border">
                            <Slider
                                className='mega-music-slider'
                                max={Math.ceil(duration)}
                                defaultValue={0}
                                value={Math.ceil(progessObj.playedSeconds)}
                                onChange={(v) => {
                                    playerRef.current.seekTo(parseFloat(v), "seconds");
                                }}
                                style={{ width: '100%' , margin:'auto 0' ,position:'auto', left:'0%',top:'-20%'}}
                                step={0.1}
                                trackStyle= {{backgroundColor:'#1C1C1C ' , color:' #1C1C1C !important', height:'0.75em'}}
                                railStyle=  {{backgroundColor:'gray' , color:' #1C1C1C !important' , height:'0.75em'}}
                                handleStyle={[{width:'0.9em',height:'0.9em',top:'60%',border:'2px solid black',boxShadow:'0 0 5px gray'}]}
                            />
                        </div>
                        
                        <div className="mega-music-buttom-container">
                            <div className="mega-navigation-l"
                                onClick={() => {
                                if (que.length == 0) {
                                    return null;
                                }
                                if (index == 0) {
                                    setIndex(que.length - 1)
                                    return null;
                                }
                                setIndex(index - 1)}}
                            >
                                <AiFillBackward />
                            </div>
                            <div className="mega-play" onClick={() => setPlaying(!isPlaying)}>
                                {isPlaying ? <GrPauseFill className='mega-play-btn mega-pause' stroke='#1C1C1C' /> : <GrPlayFill className='mega-play-btn mega-playing' stroke='#1C1C1C' />}
                            </div>
                            <div className="mega-navigation-r"
                                onClick={() => {
                                    if (que.length == 0) {
                                        return null;
                                    }
                                    if (index == que.length - 1) {
                                        setIndex(0)
                                        return null;
                                    }
                                    setIndex(index + 1)
                                }}

                            >
                                <AiFillForward />
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={550}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{zIndex:10 , position:'absolute'}}
                            preloadImages={true}
                        >
                            {que.map((url , index)=>{
                                return(
                                <SwiperSlide key={index} style={{
                                    'backgroundImage': `url('http://img.youtube.com/vi/${url.split("v=")[1].split("&")[0]}/maxresdefault.jpg')`,
                                    backgroundPosition: 'center',
                                    backgroundSize:'230%',
                                    outline: '0.3em solid rgba(255, 255, 255, 0.6)',
                                    boxShadow: '26px 24px 15px -3px rgba(0,0,0,0.3)',
                                    overflow:'hidden'}}>
                                    <div style={{
                                        position:'absolute',
                                        width:'10em',
                                        height:'10em',
                                        backgroundColor:'white',
                                        bottom:'calc(0% - 5em)',
                                        right:'-5em',
                                        borderRadius:'50%'
                                    }}></div>
                                </SwiperSlide>)
                            })}
                        </Swiper>
                    </div>

                </div>


                : playerState == 1 ?
                    <Draggable>
                        <div className='mini-music-player-cnt'>
                            <div className="mini-music-thumbnail" style={{ 'backgroundImage': `url('http://img.youtube.com/vi/${que[index].split("v=")[1].split("&")[0]}/maxresdefault.jpg')` }} />
                            <div className='mini-music-title'>{vidData === undefined ? 'undefined' : <p>{vidData.title}</p>}</div>
                            <Slider
                                className='mini-music-slider'
                                max={Math.ceil(duration)}
                                defaultValue={0}
                                value={Math.ceil(progessObj.playedSeconds)}
                                onChange={(v) => {

                                    playerRef.current.seekTo(parseFloat(v), "seconds");
                                }}
                                style={{ width: '60%' }}
                                trackStyle={{backgroundColor:'#ff4f7b85' , color:' #ff4f7b85 !important'}}
                                railStyle={{backgroundColor:'##57bef585 !important' , color:'#57bef585 !important'}}

                            />
                            <span className='mini-music-currentTime'>
                                {formatTime(currentTime * 1000)}
                            </span>
                            <span className='mini-music-duration'>
                                {formatTime(duration * 1000)}
                            </span>
                            <div className="mini-music-prev" onClick={() => {
                                if (que.length == 0) {
                                    return null;
                                }
                                if (index == 0) {
                                    setIndex(que.length - 1)
                                    return null;
                                }
                                setIndex(index - 1)
                            }}><AiFillBackward /></div>
                            <div className="mini-music-play" onClick={() => setPlaying(!isPlaying)}>
                                {isPlaying ? <GrPauseFill /> : <GrPlayFill />}
                            </div>
                            <div className="mini-music-next" onClick={() => {
                                if (que.length == 0) {
                                    return null;
                                }
                                if (index == que.length - 1) {
                                    setIndex(0)
                                    return null;
                                }
                                setIndex(index + 1)
                            }}
                                style={{ cursor: 'pointer' }}
                            ><AiFillForward /></div>
                            <Slider className='mini-music-volume'
                                style={{ width: '30%' }}
                                max={1}
                                defaultValue={0.5}
                                min={0}
                                onChange={(e) => {
                                    setVolume(e)
                                }}
                                step={0.1}

                            />

                            <BsFillVolumeUpFill className='mini-music-volume-icon' />
                            <BsArrowsAngleExpand className='mini-music-expand' onClick={() => setPlayerState(2)} style={{ cursor: 'pointer' }} />
                        </div>
                    </Draggable>

                    :
                    playerState == 0 ?
                        'minimized'

                        : null

            }

        </>
    )
}

export default MusicPlayer