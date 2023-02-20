import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Educação</div>
          <div className="subtitle">FAculdades e Cursos</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2018 - 2020</div>
                <div className="name">
                  Universidade Adventista de São Paulo - UNASP - Matemática
                </div>
                <div className="single-post-text">
                  <p>bacharelado em Matemática. incompleto</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2021-2022</div>
                <div className="name">
                  Estácio - Análise e Desenvolvimento de Sistemas
                </div>
                <div className="single-post-text">
                  <p>Ultimo semestre</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
