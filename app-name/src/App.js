import React from 'react'

function App() {
    return (
        <section className="web-wrapper">
            <section className="main-section">
                <div className="upper-bg"></div>
                <div className="circle-outer">
                    <div className="circle-inner">
                        <img src={require('./image/cloud.jpg')} />
                    </div>
                </div>
                <div className="bottom-bg">

                </div>
                <div className="main-img-ct">
                    <img className="main-image" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                </div>
                <img className='title' src={require('./image/1639821405757.png')}/>
                <div className="footer"></div>
            </section>
        </section>
    )
}

export default App
