import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

// PAGES / CONTENT
import Main from './pages/Main.js'
import Nav from './Sidenav.js'
function App() {
    return (
        <Router>
            <section className="web-wrapper">
                <section className="main-section">
                    <div className="upper-bg"></div>
                    <div className="circle-outer">
                        <div className="circle-inner">
                            <img src={require('./image/cloud.jpg')} />
                        </div>
                    </div>
                    <div className="bottom-bg" />
                    {/* CONTENT FOR ROUTER */}
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                    <div className="footer">
                        <p className="myname">hello</p>
                        <p className="date">hello</p>
                        <Time />
                    </div>
                </section>
            </section>
        </Router>
    )
}

function Time() {
    const [hours,setHours]     = useState(new Date().getHours())
    const [minutes,setMinutes] = useState(new Date().getMinutes())
    const [seconds,setSeconds] = useState(new Date().getSeconds())
    
    useEffect(()=>{
        setInterval(()=>{
            let tHours = new Date().getHours()
            if(tHours.toString().length < 2){
                setHours('0'+tHours.toString())
            }
            else{setHours(tHours.toString())}
            let tMinutes = new Date().getMinutes()
            if(tMinutes.toString().length < 2){
                setMinutes('0'+tMinutes.toString())
            }
            else{setMinutes(tMinutes.toString())}
            let tSeconds = new Date().getSeconds()
            if(tSeconds.toString().length < 2){
                setSeconds('0'+tSeconds.toString())
            }
            else{setSeconds(tSeconds.toString())}
        },1000)
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
        </div>
    )
}

export default App




