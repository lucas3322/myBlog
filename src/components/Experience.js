import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experiência</div>
          <div className="subtitle">Locais onde trabalhei</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2020 - 2021</div>
                <div className="name">
                  NC7 <br />
                  Integradora
                </div>
                <div className="single-post-text">
                  <p>
                    Atuando especialemnte com a linguágem PHP, trabalhando com
                    templates e CRM's. <br />
                    Atuando também com tratamento de dados em massa com Python.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">ATUAL</div>
                <div className="name">
                  Agência <br />
                  All Digital
                </div>
                <div className="single-post-text">
                  <p>
                    atuando na equipe de desenvolvimento de softwares, tanto no
                    Front-End quando no BackEnd, de acordo com a nessecidade do
                    projeto.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
