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
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
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
    const [playerState, setPlayerState] = useState(2) // 0 closed , 1 small , 2 full
    const [que, setQue] = useState(['https://www.youtube.com/watch?v=Wt0Z3DSMGSk', 'https://www.youtube.com/watch?v=Vv_9kgnoFSM&', 'https://www.youtube.com/watch?v=Fc-5d7V1Rjg'])
    const [currentTime, setCurrentTime] = useState(0)
    const [activeFrame, setActiveFrame] = useState(0)


    useEffect(() => {
        $.getJSON('https://noembed.com/embed',
            { format: 'json', url: que[index] }, function (data) {
                setVidData(data);
                console.log(vidData)
            })
    }, [index]);

    const [vidData, setVidData] = useState()
    const swiperRef = useRef();
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
                        swiperRef.current.slideTo(0)
                        return null;
                    }

                    setIndex(index + 1)
                    swiperRef.current.slideTo(index + 1)
                }} />

            {playerState == 2 ?
                <div className="mega-music-cnt">
                    <div className="mega-music-thumbnail" style={{ 'backgroundImage': `url('http://img.youtube.com/vi/${que[index].split("v=")[1].split("&")[0]}/maxresdefault.jpg')` }}>
                        
                        <div className="mega-music-info-cnt"></div>
                        <div className="mega-music-info-cnt-2"></div>

                        

                        {/* <div className='mega-music-title' style={{backgroundColor:''}}>{vidData === undefined ? 'undefined' : <p>{vidData.title}</p> }</div> */}

                        {/* <div className="mega-music-main-btn-cnt">
                            <div className="mega-play" onClick={() => setPlaying(!isPlaying)}>
                                {isPlaying ? <GrPauseFill className='mega-play-btn mega-pause' color='white' /> : <GrPlayFill className='mega-play-btn mega-playing' stroke='#1C1C1C' />}
                            </div>
                        </div> */}
                        <div className="mega-player-main-body">
                            <Swiper
                                spaceBetween={75}
                                slidesPerView={1}
                                onSlideChange={(e) => (setIndex(e.activeIndex))}
                                style={{ zIndex: 10, position: 'absolute' }}
                                modules={[EffectFade]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                effect={'fade'}
                            >
                                {que.map((url, index) => {

                                    return (
                                        <SwiperSlide key={index} 
                                        
                                        
                                        style={{
                                            'backgroundImage': `url('http://img.youtube.com/vi/${url.split("v=")[1].split("&")[0]}/maxresdefault.jpg')`,
                                            backgroundPosition: 'center',
                                            backgroundSize: '230%',
                                            outline: '0.8   em solid #cadffa',
                                            boxShadow: 'inset #ffffff73 -6px -6px 14px,inset rgba(94 , 104 ,140 ,.288) 7px 7px 14px , inset #cadffa 0 0 0 10px ',
                                            overflow: 'hidden',
                                            border:'0.5px solid rgba(255,255,255,0.2);'
                                        }}>
                                        </SwiperSlide>)
                                })}
                            </Swiper>
                            <div className="mega-music-menu-btm-border">
                                <Slider
                                    className='mega-music-slider'
                                    max={Math.ceil(duration)}
                                    defaultValue={0}
                                    value={Math.ceil(progessObj.playedSeconds)}
                                    onChange={(v) => {
                                        playerRef.current.seekTo(parseFloat(v), "seconds");
                                    }}
                                    style={{ width: '90%', margin: 'auto 0', marginTop: '0.75em', position: 'auto', left: '1.5em' , top: '-20%' }}
                                    step={0.1}
                                    trackStyle={{ backgroundColor: ' rgba(94 , 104 ,140 ,.488)', color: ' #1C1C1C !important', height: '0.75em' }}
                                    railStyle={{ backgroundColor: '#ffffff50', color: ' #1C1C1C !important', height: '0.75em' }}
                                    handleStyle={[{ width: '0.9em', height: '0.9em', top: '60%', border: '0px solid black', boxShadow: '0 0 5px gray' }]}
                                />
                                
                            </div>
                        </div>

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
                                trackStyle={{ backgroundColor: '#ff4f7b85', color: ' #ff4f7b85 !important' }}
                                railStyle={{ backgroundColor: '##57bef585 !important', color: '#57bef585 !important' }}

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

