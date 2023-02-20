const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Sobre mim</div>
          <div className="subtitle">Minha história</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col">
            <div className="single-post-text">
              <p>
                Sou um programador com dois anos de experiência, focado em
                front-end e com conhecimentos em back-end. Apaixonado pela área
                de programação e desenvolvimento de sistemas, tenho grande
                interesse em aprender novas tecnologias e metodologias.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="single-post-text">
              <p>
                Meu objetivo é contribuir para projetos inovadores e
                desafiadores, sempre buscando soluções criativas e eficientes
                para os problemas.
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text">
              <p>
                Durante minha jornada como programador, adquiri habilidades em
                HTML, CSS, JavaScript, React, Node.js e banco de dados. Também
                tenho conhecimentos em metodologias ágeis, como Scrum e Kanban.
              </p>

              <p>
                Sempre busco me manter atualizado sobre as tendências e
                evoluções do mercado, frequentando eventos e cursos, lendo
                artigos e participando de comunidades online de desenvolvimento.
              </p>

              <p>
                Alé, disso, sou uma pessoa dedicada comprometida e proativa, com
                grande capacidade de trabalho em equipe e solução de problemas.
              </p>

              <p>
                Estou em busca de novos desafios e oportunidades de crescimento,
                onde possa colocar em prática meus conhecimentos e contribuir
                para o sucesso de crescimento, onde possa colocar em prática
                meus conhecimentos e contribuir para o sucesso da empresa.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Idade:</strong> 25
            </li>
            <li>
              <strong>Residência:</strong> BR
            </li>
            <li>
              <strong>Regime:</strong> PJ - CLT
            </li>
            <li>
              <strong>Endereço:</strong> São Paulo
            </li>
            <li>
              <strong>Whatsapp:</strong> (11) 9 66416-1550
            </li>
            <li>
              <strong>E-mail:</strong> lucass706@hotmail.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
