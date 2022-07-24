import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import { useEffect } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import background from './image/cloud-anime.gif'

//decoration stuff
import Wave from 'react-wavify'

// PAGES / CONTENT
import Main from './pages/Main.js'
import Nav from './Sidenav.js'
import AboutMeHeader from './AboutMeHeader'
import AboutMeCard from './AboutMeCard'
import MusicPlayer from './MusicPlayer'



// css
// Import Swiper styles
import 'swiper/css';
import './about-me.css'
import './about-me-header.css'
const ContextApi = createContext();




function App() {


    const [isOpen, setIsOpen] = useState(false)

    const contextApiObject = {
        setIsOpen: setIsOpen,
        isOpen: isOpen

    }


    return (
        <Router>
            <ContextApi.Provider value={contextApiObject}>

                <section className="web-wrapper">

                    <AboutMeCard open={isOpen} close={() => setIsOpen(false)} />
                    <section className="main-section">
                        <div className="upper-bg"></div>

                        <div className="circle-outer">

                            <div className="circle-inner">
                                <img src={require('./image/cloud.jpg')} />
                            </div>
                        </div>
                        <div className="wave-effect">
                            <Wave fill='#0462C4'
                                paused={false}
                                options={{
                                    height: 80,
                                    amplitude: 30,
                                    speed: 0.15,
                                    points: 4
                                }}
                            />
                            
                        </div>
                        <div className="wave-effect">
                            <Wave fill='#57bef5'
                                paused={false}
                                options={{
                                    height: 110,
                                    amplitude: 30,
                                    speed: 0.15,
                                    points: 4
                                }}
                            />
                            
                        </div>
                        <div className="wave-effect">
                            <Wave fill='#92d1ff'
                                paused={false}
                                options={{
                                    height: 110,
                                    amplitude: 35,
                                    speed: 0.16,
                                    points: 4
                                }}
                            />
                            
                        </div>
                        
                        <AboutMeHeader ContextApi={ContextApi} />
                        
                        <div className="bottom-bg" />
                        {/* CONTENT FOR ROUTER */}
                        <Routes>
                            <Route path="/" element={<Main />} />
                        </Routes>
                        <MusicPlayer/>
                        <div className="footer">
                            <Dates />
                            <Time />
                        </div>

                    </section>

                </section>
            </ContextApi.Provider>
        </Router>
    )
}

function Time() {
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [isDay, setIsDay] = useState(false)
    useEffect(() => {
        setInterval(() => {
            let tHours = new Date().getHours()
            if (tHours.toString().length < 2) {
                setHours('0' + tHours.toString())
            }
            else { setHours(tHours.toString()) }
            let tMinutes = new Date().getMinutes()
            if (tMinutes.toString().length < 2) {
                setMinutes('0' + tMinutes.toString())
            }
            else { setMinutes(tMinutes.toString()) }
            let tSeconds = new Date().getSeconds()
            if (tSeconds.toString().length < 2) {
                setSeconds('0' + tSeconds.toString())
            }
            else { setSeconds(tSeconds.toString()) }
            if (tHours > 4 && tHours < 16) {
                setIsDay(true)
            }
            else {
                setIsDay(false)
            }
        }, 1000)
    })
    return (
        <div className="time">
            <section>
                <p>{hours + 'H'}</p>
            </section>
            <span>:</span>
            <section>
                <p>{minutes + 'M'}</p>
            </section>
            <span>:</span>
            <section>
                <p>{seconds + 'S'}</p>
            </section>
            <span className='day-night-icon'>
                {isDay ? (<BsFillSunFill />) : (<BsFillMoonFill />)}
            </span>
        </div>
    )
}

function Dates() {
    // ARRAY
    const aMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const aDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // ARRAY

    const [day, setDay] = useState([new Date().getDate(), new Date().getDay()])
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setInterval(() => {
            setDay([new Date().getDate(), new Date().getDay()])
            setMonth(new Date().getMonth())
            setYear(new Date().getFullYear())

        }, 100000)
    })
    return (
        <div className='date'>
            <section className='day-dates'>
                <p>
                    {aDay[day[1]] + " " + day[0].toString() + ", "}
                </p>
            </section>
            <section className='month-year'>
                <p>
                    {aMonth[month] + " " + year}
                </p>
            </section>
        </div>
    )
}





export default App




