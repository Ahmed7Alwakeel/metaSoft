
import React from 'react'
import './speakers.css'

const Speakers = () => {
    return (
        <div className='row mt-5'>
            <div className='col-md-5 ms-md-5'>
                <div className="bg-orange w-25">
                    <hr className='border__hr w-25' />
                </div>
            </div>
            <div className='col-12'>
                <h4 className='fw-bold ms-md-5 mb-5'> Speaking Testimonials</h4>
            </div>
            <div className='col-12 d-flex align-items-center justify-content-center'>
                <div className='row ms-5 me-5'>
                    <div className='col-3'>
                        <div class="card cardd rounded-top" >
                            <img src={require("./img/Member1.png")} className="  card-img-top w-100" />

                            <div class="card-body">
                                <h6 class="card-title mb-2">Founder Of Advisor Excel</h6>
                                <hr className='w-75 m-auto mb-2' />
                                <p className='text-center'>"Your Session was one of the very best and most valuable we 've ever had"</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card cardd rounded-top" >
                            <img src={require("./img/Member2.PNG")} className="  card-img-top w-100" />

                            <div class="card-body">
                                <h6 class="card-title mb-2">US Field Development Manager At Pampered Chef</h6>
                                <hr className='w-75 m-auto mb-2' />
                                <p className='text-center'>"Your presentation was spot in! they LOVED you!" </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card  cardd rounded-top" >
                            <img src={require("./img/Member3.PNG")} className="  card-img-top w-100" />

                            <div class="card-body">
                                <h6 class="card-title mb-2">Vice President Of Vendor Alliance</h6>
                                <hr className='w-75 m-auto mb-2' />
                                <p className='text-center'>"Thanks for an increadible job well done!"</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="card cardd rounded-top" >
                            <img src={require("./img/Member4.PNG")} className="  card-img-top w-100" />

                            <div class="card-body">
                                <h6 class="card-title mb-2">Meeting Planner & Services Coordinator At Furniture First</h6>
                                <hr className='w-75 m-auto mb-2' />
                                <p className='text-center'>"Rory us a dynamic speaker with a great message"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 '>
                <div className='row d-flex flex-row align-items-center' >
                    <div className="col-2"></div>
                    <div className='col-3'>
                        <div className="bg-orange w-100">
                            <hr className='border__hr w-25' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="bg-orangeOp w-100">
                            <hr className='border__hrUnActive w-25' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="bg-orangeOp w-100">
                            <hr className='border__hrUnActive w-25' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 text-center'>
                <button className='bnt btn-orangeM text-light fw-bold mt-5 mb-5 p-2 ps-4 pe-4'>See All</button>
            </div>
        </div>
    )
}

export default Speakers

