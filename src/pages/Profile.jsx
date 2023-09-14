import "../styles/profile.css";

import imagewhite from "../assets/profile-image-white.jpg";
import imageblack from "../assets/profile-image-black.jpg";

export default function Profile() {
  return (
    <>
      <main>
        <section className="container hero">
          <div className="flex heading">
            <h1>Hey 👋🏼 I'm Oli</h1>
          </div>
          <div className="img">
            <img loading="lazy" src={imagewhite} alt="" />
            <img
              className="small-screen-hidden"
              loading="lazy"
              src={imageblack}
              alt=""
            />
          </div>
        </section>
        <section className="container about">
          <div className="flex-v">
            <h2 className="button">About</h2>
            <p>
              A freelance designer based in the UK. I combine my experience in
              product and brand to solve problems, tell stories, and create
              compelling experiences.
            </p>
          </div>
        </section>
        <section className="container experience">
          <div className="flex-v">
            <h2 className="button">Experience</h2>
            <p>Where I've worked</p>
          </div>
          <div className="grid exp-container ">
            <div className="flex-v">
              <p>2017 — Present</p>
              <h3>OH.STUDIO</h3>
              <p>Freelance Designer</p>
              <p className="button">Director</p>
            </div>
            <div className="flex-v">
              <p>2021 — Present</p>
              <h3>Friendly Studio</h3>
              <p>Lead Product Designer</p>
              <p className="button">Freelance</p>
            </div>
            <div className="flex-v">
              <p>2021 - 2022</p>
              <h3>R/GA</h3>
              <p>Senior Visual Designer</p>
              <p className="button">Director</p>
            </div>
            <div className="flex-v">
              <p>2021 - 2022</p>
              <h3>AKQA</h3>
              <p>Senior Designer</p>
              <p className="button">Freelance</p>
            </div>
            <div className="flex-v">
              <p>2019</p>
              <h3>UI Centric</h3>
              <p>Senior Product Designer</p>
              <p className="button">Freelance</p>
            </div>
            <div className="flex-v">
              <p>2017</p>
              <h3>Agency TK</h3>
              <p>Senior Digital Designer</p>
              <p className="button">Permanent</p>
            </div>
            <div className="flex-v">
              <p>2012</p>
              <h3>Agency TK</h3>
              <p>Digital Designer</p>
              <p className="button">Permanent</p>
            </div>
            <div className="flex-v">
              <p>2009</p>
              <h3>Next Level</h3>
              <p>Digital Designer</p>
              <p className="button">Permanent</p>
            </div>
          </div>
        </section>
        <section className="container clients">
          <div className="flex-v">
            <h2 className="button">Clients</h2>
            <p>Who I've worked with</p>
          </div>
          <div className="grid-client cl-container ">
            <div className="flex-v">
              <h3>EUROSPORT</h3>
            </div>
            <div className="flex-v">
              <h3>R/GA</h3>
            </div>
            <div className="flex-v">
              <h3>NIKE</h3>
            </div>
            <div className="flex-v">
              <h3>OLYMPICS</h3>
            </div>
            <div className="flex-v">
              <h3>SCHUH</h3>
            </div>
            <div className="flex-v">
              <h3>MUSCLE GUN</h3>
            </div>
            <div className="flex-v">
              <h3>AKQA</h3>
            </div>
            <div className="flex-v">
              <h3>WORLD GOLD COUNCIL</h3>
            </div>
            <div className="flex-v">
              <h3>5</h3>
            </div>
            <div className="flex-v">
              <h3>CORRELATED</h3>
            </div>
            <div className="flex-v">
              <h3>HERE</h3>
            </div>
            <div className="flex-v">
              <h3>ZERO LIGHT</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
