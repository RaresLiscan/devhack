import React from "react";

export default function Challanges() {
  return (
    <div id="all">
      <div id="boxx">
        <div class="has-bg-img">
          <img
            id="pozaa"
            class="bg-img"
            src="https://i.ibb.co/xCyzRCQ/hero.jpg"
            alt="hero"
            style={{ margin: "20px" }}
          />
        </div>

        <a href="/63831d899f0f07fb1f3e030b">
          <button
            id="buttton"
            type="button"
            class="btn btn-outline-primary"
            style={{ margin: "10px" }}
          >
            Register
          </button>
        </a>

        <p id="textt">
          Each week we will assign a new challenge for all the participants.
          <br></br>
          You will be notified who you have to do the challenge with <br></br>
          (one or more of your work colleagues), match based on your hobbies,
          location and free time.<br></br>
          You have to take photos (as proof) that you completed the challenge
          and write a short <br></br>
          description about your experience while working with your asssigned
          teammates.
        </p>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-mdb-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="d-block w-100"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                class="d-block w-100"
                alt="Camera"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
