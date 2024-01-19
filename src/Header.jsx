import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './Header.css'
const Header = () => {
  return (
    <>
    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="https://www.discover-the-world.com/app/uploads/2018/08/norway-northern-tromso-surrounds-with-aurora-istk-1800x0-c-default.jpg" class="d-block w-100 c-img" alt="Slide 1"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="mt-5 fs-3 text-uppercase">Discover the hidden world</p>
          <h1 class="display-1 fw-bolder text-capitalize">The Aurora Tours</h1>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Book a tour</button>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://i.natgeofe.com/n/a6f84fff-b808-4e90-8a2d-1964b242e391/1-redwood.jpg" class="d-block w-100 c-img" alt="Slide 2"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">The season has arrived</p>
          <p class="display-1 fw-bolder text-capitalize">3 available tours</p>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
            data-bs-target="#booking-modal">Book a tour</button>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zJTIwYnklMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100 c-img" alt="Slide 3"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">Destination activities</p>
          <p class="display-1 fw-bolder text-capitalize">Go glacier hiking</p>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
            data-bs-target="#booking-modal">Book a tour</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </>
  )
}

export default Header