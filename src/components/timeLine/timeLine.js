
import React from 'react'
import './timeLine.css'

const TimeLine = () => {
    return (
        <>
            <div className='row bg-whiteT'>
                <div className='col-md-5 ms-5 mb-5 mt-5'>
                    <h3 className='mb-3 mt-5 fw-bold'> Procrastation in the most
                        expensive invisible cost in business today</h3>
                    <div className='timeLine__area ps-3'>
                        <div className='divTimeO'>
                            <p className='fs-4'>If you can't figure out how to inspire and influence people to do something different,
                                then you and they will both stay stack in the status quo </p>
                        </div>
                        <div className='divTime'>
                            <p className='fs-4'>You won't grow revenues </p>
                        </div>
                        <div className='divTime'>
                            <p className='fs-4'>You won't grow your rich </p>
                        </div>
                        <div className='divTime'>
                            <p className='fs-4'>You won't grow your engagment </p>
                        </div>
                        <div className='divTime'>
                            <p className='fs-4'>You won't grow your rich </p>
                        </div>
                        <div className='divTime'>
                            <p className='fs-4'>You won't grow other leaders </p>
                        </div>
                        <div className='divTimeO'>
                            <p className='fs-4'>This is the greatest risk of every organization and every leader beacuse it puts you at vulnerable risk of becoming antiquated,
                                mediocre, outperformed and ultimately irrelevant </p>
                        </div>
                    </div>
                    <button className='bnt btn-orangeM text-light mt-3 fs-4 fw-bold p-2'>REQUEST SPEAKING INFORMATION</button>
                </div>
                <div className='col-md-6 mb-5'>
                    <img src={require("./img/Capture.PNG")} className="w-100 mt-3" />
                </div>
            </div>
        </>
    )
}

export default TimeLine
