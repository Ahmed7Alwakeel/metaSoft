
import React from 'react'
import './meetRory.css'


const MeetRory = () => {
    return (
        <div className='row mt-5'>
            <div className='col-md-5 ms-md-5 mb-5'>
                <div className="bg-orange w-25">
                <hr className='border__hr w-25' />
                </div>
               
                <h4 className='mb-3 fw-bold'> Meet Rory Vaden </h4>
                <p className='fs-4'>Rory Vaden is the New York Times bestselling author of Tke the Stairs.
                    His insights have been featured in the Wall Street Journal, Forbes, CNN, Entrepreneur, Inc,
                    On Fox News national television and in severl other major media outletsm As a wirld-renowned speaker,
                    His Tedx talk has been viewed over 3 million times, he is a  </p>
                <form className='ms-5  mt-5'>
                    <button className='bnt btn-orangeM text-light fw-bold p-2'>Learn more</button>
                </form>
            </div>
            <div className='col-md-6 mb-5'>
                <img src={require("./img/Favorite-Rory-Vaden-Stairs-onken-20181004-Summit-Of-Greatness-0385.png")} className="w-100" />
            </div>
        </div>
    )
}

export default MeetRory

