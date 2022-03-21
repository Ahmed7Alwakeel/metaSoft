
import React from 'react'
import './insights.css'

const Insights = () => {
    return (
        <>
            <div className='insights'>

                <div className='row '>
                    <h3 className='text-light ms-md-3 mt-5 fw-bold mb-5'>Rory's insights have been featured in :</h3>
                    <div className='col-3'>
                        <img src={require("./img/1.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-2 '>
                        <img src={require("./img/2.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-3 '>
                        <img src={require("./img/3.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-2 '>
                        <img src={require("./img/4.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-3 '>
                        <img src={require("./img/5.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-2 '>
                        <img src={require("./img/6.png")} className="w-100 ms-md-5" />
                    </div> 
                    <div className='col-3 '>
                        <img src={require("./img/7.png")} className="w-100 ms-md-5" />
                    </div>
                    <div className='col-2 '>
                        <img src={require("./img/8.png")} className="w-100 ms-md-5" />
                    </div>
                     <div className='col-3 mb-5'>
                        <img src={require("./img/9.png")} className="w-100 ms-md-5" />
                    </div> 
                    <div className='col-3 mb-5'>
                        <img src={require("./img/10.png")} className="w-100 ms-md-5 " />
                    </div>
                    <div className='col-3 mb-5'>
                        <img src={require("./img/11.png")} className="w-100 ms-md-5" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Insights

