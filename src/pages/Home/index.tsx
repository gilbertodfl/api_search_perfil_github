import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h4>Desafio Github API</h4>
        <p>Bootcamp spring react - DevSuperior -</p> 
        <p>My github is : gilbertodfl</p>
      </div>
      <div className="home-container">
        <Link to="/search_people">
          <button className="btn btn-primary btn-lg start-button">
            Começar
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
