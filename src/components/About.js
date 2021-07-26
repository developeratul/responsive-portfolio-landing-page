import AboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="about_section_content_wrapper">

          <div className="about_img">
            <img alt="about section image" src={AboutImg} />
          </div>

          <div className="about_desc">
            <h2>About Me</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              nam accusantium. Illum esse, quia fugiat non dolor autem quas
              libero.
            </p>

            <div className="linked_button">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button>Visit My Github</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
