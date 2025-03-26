import React from "react";

function slider() {
  return (
    <div>
     
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
       >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/robo.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/robo-6.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/robo-5.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default slider;
