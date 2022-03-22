
import React, { useState } from 'react'
import './companies.css'

const Companies = () => {
  let [image, setImage] = useState([
    require('./img/1.png'),
    require('./img/2.png'),
    require('./img/3.png'),
    require('./img/4.png'),
    require('./img/5.png'),
    require('./img/6.png'),
    require('./img/7.png'),
    require('./img/8.png'),
    require('./img/9.png'),
    require('./img/10.png'),
    require('./img/11.png'),
    require('./img/12.png'),
    require('./img/13.png'),
    require('./img/14.png'),
    require('./img/15.png'),
    require('./img/16.png'),
    require('./img/17.png'),
    require('./img/18.png'),
    require('./img/19.png'),
    require('./img/20.png'),
    require('./img/21.png'),
    require('./img/22.png'),
    require('./img/23.png'),
    require('./img/24.png'),
    require('./img/25.png'),
    require('./img/26.png'),
    require('./img/27.png'),
    require('./img/28.png'),
    require('./img/29.png'),
    require('./img/30.png'),


  ])
  return (
    <>
      <div className='row bg-white '>
        <h4 className='ms-5 mt-5 mb-5 text-darkk'>Rory has deliverd Keynote presentation to:</h4>
        <div className='col-12 mb-5  '>
          <div className='row'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='col-12'>
                    <div className='row'>
                      {image.map((img, index) => {
                        return (
                          <div className='col-2 mt-2' key={index}>
                            <img src={img} className='w-75 ms-2' />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev bg-light border border-4 border-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon text-dark fw-bolder fs-1" aria-hidden="true"><i class="fa fa-angle-left fs-1 fw-bolder"></i></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next bg-light border border-4 border-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon text-dark fw-bolder fs-1" aria-hidden="true"><i class="fa fa-angle-right fs-1 fw-bolder"></i></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Companies

