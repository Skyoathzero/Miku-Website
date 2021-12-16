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
                <div className="main-img-ct">
                    <img className="shilouette-image-1" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                    <img className="shilouette-image-2" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                    <img className="shilouette-image-3" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                    <img className="shilouette-image-4" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                    <img className="main-image" src={require('./image/hatsune_miku__vocaloid____render__034_by_hansume_dbbbjr4(1).png')}/>
                </div>
            </section>
        </section>
    )
}

export default App
