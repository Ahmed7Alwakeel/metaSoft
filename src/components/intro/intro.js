
import React from 'react'
import './intro.css'

const Intro = () => {
    return (
        <>
            <div className='introSection'>
                <div className='introSection__layer'>
                    <div className='row'>
                        <div className='col-md-12 ms-md-5  mt-5 mb-2'>
                            <button className='bnt btn-transpernt  border border-2 text-light fs-5 fw-bold p-2'>RODY VADEN</button>
                        </div>
                        <div className='col-8 ms-md-5'>
                            <div className="bg-orange w-25">
                                <hr className='border__hr w-25' />
                            </div>
                            <h1 className='text-light fw-bold mb-3 fw-1'>Become a More <br />Influential Leader</h1>
                            <p className='text-light fw-bold mb-0'>SEE WHY NEW YORK TIMES BESTSELLING AUTHOR AND  HALL OF FAME LEADERSHIP SPEAKER</p>
                            <button className='bnt btn-orange text-light fw-bold p-2'>Learn more</button>
                            <p className='text-light fw-bold mb-3'>IS THE PERFECT CHOICE TO KEYNOTE YOUR NEXT EVENT</p>
                            <div className=' mt-5'>
                                <button className='bnt btn-transpernt  border border-2 text-light fs-5 fw-bold p-2 me-1 ms-1'><i class="fa fa-play p-2"></i> Watch RODY's Video</button>
                                <button className='bnt btn-orange text-light fw-bold p-2 fs-5 ms-1 me-1 mt-2'>REQUEST SPEAKING INFORMATION</button>
                            </div>
                        </div>
                        <div className='col-3'>
                            <img src={require("./img/Rory.png")} className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row text-center col-postion '>
                <div className='col-12 '>
                    <div className='col-6 card__postion '>
                    <div class="card " >
                        <div class="card-body">
                            <h5 class="card-title">Get Rory's Influentuial Leader Video Course Free</h5>
                            <p class="card-text card__p">When you sign up to receive his blog updates via email.</p>
                         <input className='form-control w-50 d-inline me-2' placeholder='Email'/>
                         <button className='bnt btn-orangeM text-light fw-bold p-2 ps-4 pe-4'>SIGN UP</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro

