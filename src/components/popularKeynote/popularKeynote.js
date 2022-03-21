import React from 'react'
import './popularKeynote.css'

const PopularKeynote = () => {
    return (
        <>
            <div className='row bg-white '>
                <div className='col-md-6 mt-5 mb-5'>
                    <img src={require("./img/A-Rory-Vaden-Crown-Council-02-2017-102-wide-audience-close-color.png")} className="w-100 mt-5" />
                    <form className='ms-5 mt-5'>
                    <button className='bnt btn-light ms-5 text-dark fw-bold p-2'><i class="fa fa-play p-2"></i> WATCH RORY'S VIDEO</button>
                    </form>
                </div>
                <div className='col-md-6 mt-5 mb-5'>
                    <h4 className='mb-3'>Popular Keynote Program </h4>
                    <ul>
                        <li className='mb-3'>Take th Stairs (Movtivation and Inspiration)</li>
                        <li className='mb-3'>Rock Solid Rqputation (Culture and Customer Experience)</li>
                        <li className='mb-3'>Multiply Your Time (Perfirmance and Productivity)</li>
                        <li className='mb-3'>Influential Personal Brand (Influence and Digital Marketing)</li>
                        <li className='mb-3'>Rock Solid Rqputation (Culture and Customer Experience)</li>
                        <li className='mb-3'>Desgin a Custom Program</li>
                    </ul>
                    <form className='ms-5  mt-5'>
                    <button className='bnt btn-orange text-light fw-bold p-2'>REQUEST SPEAKING INFORMATION</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default PopularKeynote

