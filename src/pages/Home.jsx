import "../styles/home.css";

import image1 from "../assets/home-image-1.jpg";
import image2 from "../assets/home-image-2.jpg";
import image3 from "../assets/home-image-3.jpg";
import image4 from "../assets/home-image-4.jpg";
import image5 from "../assets/home-image-5.jpg";
import image6 from "../assets/home-image-6.jpg";

import video1 from "../assets/home-video-1.mp4";
import video2 from "../assets/home-video-2.mp4";
import video3 from "../assets/home-video-3.mp4";
import video4 from "../assets/home-video-4.mp4";

export default function Home() {
  return (
    <>
      <main>
        <section className="container hero flex">
          <div>
            <h1>A brand and product designer working with clients globally</h1>
            <div className="button-container">
              <div className="flex">
                <p>Expertise</p>
                <p href="https://example.com" className="button">
                  Product
                </p>
                <p href="https://example.com" className="button">
                  Branding
                </p>
                <p href="https://example.com" className="button">
                  Design Systems
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container content img">
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image5} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <video loading="lazy" autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image2} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image3} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <video loading="lazy" autoPlay loop muted>
                <source src={video1} type="video/mp4" />
              </video>
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image1} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image4} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <video loading="lazy" autoPlay loop muted>
                <source src={video3} type="video/mp4" />
              </video>
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <video loading="lazy" autoPlay loop muted>
                <source src={video4} type="video/mp4" />
              </video>
              <p>Branding/Product/Design</p>
            </a>
          </div>
          <div>
            <a href="https://example.com">
              <img loading="lazy" src={image6} alt="" />
              <p>Branding/Product/Design</p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
