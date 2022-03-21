
import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='row bg-dark'>
                <div className='col-md-2 ms-md-5  mt-5 mb-5'>
                    <button className='bnt btn-dark border border-5 text-light fs-5 fw-bold p-2'>RODY VADEN</button>
                </div>
                <div className='col-9'>
                    <div className='row mb-3'>
                        <div className='col-md-2 mt-5'>
                            <h5 className='text-light d-inline mt-5 ms-md-5 '>Home</h5>
                        </div> <div className='col-md-2'>
                            <h5 className='text-light mt-5'>Social Media</h5>
                        </div> <div className='col-md-2'>
                            <h5 className='text-light mt-5'>Meet Rory</h5>
                        </div> <div className='col-md-3'>
                            <h5 className='text-light mt-5'>Personal Branding</h5>
                        </div> <div className='col-md-2 '>
                            <h5 className='text-light mt-5'>Blog</h5>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <h5 className='text-light d-inline mt-5 ms-md-5'>Books</h5>
                        </div> <div className='col-md-2'>
                            <h5 className='text-light mt-5'>Free Trainings</h5>
                        </div> <div className='col-md-2'>
                            <h5 className='text-light mt-5'>Podcast</h5>
                        </div> <div className='col-md-3'>
                            <h5 className='text-light mt-5'>Contact</h5>
                        </div> <div className='col-md-2'>
                            <h5 className='text-light mt-5'>Speaking</h5>
                        </div>

                        <div className='col-3 '></div>
                        <div className='col-1 mt-5'>
                            <i class="fa fa-instagram text-light fs-3"></i>
                        </div>
                        <div className='col-1 mt-5'>
                            <i class="fa fa-youtube text-light fs-3"></i>
                        </div>
                        <div className='col-1 mt-5'>
                            <i class="fa fa-linkedin text-light fs-3"></i>
                        </div>
                        <div className='col-1 mt-5'>
                            <i class="fa fa-facebook text-light fs-3"></i>
                        </div>
                        <div className='col-1 mt-5'>
                            <i class="fa fa-twitter text-light fs-3"></i>
                        </div>
                        
                        <div className='col-1 mt-5'>
                            <i class="fa fa-pinterest text-light fs-3"></i>
                        </div>
                       
                    </div>
                </div>
                <div className='col-12 mb-2 border-1'>
                   
                </div> 
                <div className='col-12 text-center text-light'>
                   <h4>Copyright <i class="fa fa-copyright text-light"></i> 2021 Buconcy. All Rights Reserved</h4>
                </div>
            </div>
        </>
    )
}

export default Footer

