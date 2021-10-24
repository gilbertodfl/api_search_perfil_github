import './styles.css';

import ResultCard from 'components/ResultCard';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  perfil_github: string;
};

type DadosPerfil = {
  name: string;
  location: string;
  followers: string;
  url: string;
  avatar_url: string;
};

const PerfilGitHubSearch = () => {
  const [dadosPerfil, setDadosPerfil] = useState<DadosPerfil>();

  const [formData, setFormData] = useState<FormData>({
    perfil_github: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.perfil_github}`)
      .then((response) => {
        setDadosPerfil(response.data);
      })
      .catch((error) => {
        setDadosPerfil(undefined);
        console.log(error);
      });
  };

  return (
    <div className="perfil-github-search-container">
      <div className="container-search-container">
        <h1>Encontre um perfil GitHub</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="perfil_github"
              className="search-input"
              placeholder="pesquisa perfil Github"
              value={formData.perfil_github}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>

        {dadosPerfil && (
          <div className="row result-row">
            <div className="col-xl-6 result-search">
              <div>
                <img
                  src={dadosPerfil.avatar_url}
                  alt={dadosPerfil.avatar_url}
                />
              </div>
              </div>
              <div className="col-xl-6 result-data">
                <h2>Informações</h2>
                <ResultCard title="Nome" description={dadosPerfil.name} />
                <ResultCard
                  title="Localização"
                  description={dadosPerfil.location}
                />
                <ResultCard
                  title="Seguidores"
                  description={dadosPerfil.followers}
                />
                <ResultCard title="perfil" description={dadosPerfil.url} />
              </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilGitHubSearch;
