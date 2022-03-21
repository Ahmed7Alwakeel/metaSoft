
import React from 'react'
import './secrets.css'

const Secrets = () => {
    return (
        <>
            <div className='secretSection'>
                <div className='layer'>
                    <div className='row '>
                        <div className='col-6 ms-5 mb-5 '>
                            <h3 className='mb-5 mt-5 fw-bold text-light'> LEARN THE SECRETS OF INFLUENCING PEOPLE AND MOVING THEM TO TAKE ACTION </h3>
                            <p className='fs-4 text-light'>Rory Vaden is the New York Times bestselling author of Tke the Stairs.
                                His insights have been featured in the Wall Street Journal, Forbes, CNN, Entrepreneur, Inc,
                                On Fox News national television and in severl other major media outletsm As a wirld-renowned speaker,
                                His Tedx talk has been viewed over 3 million times, he is a  </p>
                            <form className='ms-5  mt-5'>
                                <button className='bnt btn-orange text-light fw-bold p-2'>REQUEST SPEAKING INFORMATION</button>
                            </form>
                        </div>
                        <div className='col-5'>
                            <div className='imgOpacitiy'>
                                <img src={require("./img/Mask Group38.png")} className="w-100 mt-5 d-none d-lg-block d-md-none imgOpacitiy__img1" />
                                <img src={require("./img/Mask Group39.png")} className="w-100 mt-5 d-none d-lg-block d-md-none imgOpacitiy__img2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secrets

