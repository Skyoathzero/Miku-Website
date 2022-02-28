import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes  } from 'react-router-dom'

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
                    <div className="bottom-bg"/>
                    {/* CONTENT FOR ROUTER */}
                    <Routes>
                        <Route path="/" element={<Main/>} />
                    </Routes>
                    <div className="footer">
                        <p className="myname">hello</p>
                        <p className="date">hello</p>
                        <p className="time">hello</p>
                    </div>
                </section>
            </section>
        </Router>
    )
}

export default App
