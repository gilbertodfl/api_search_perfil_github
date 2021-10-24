import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import PerfilGitHubSearch from 'pages/PerfilGitHubSearch';
// Aqui direciono as chamadas: Se alguém chamar por path alguma coisa, então chamo o que está dentro. 
const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
       <Route path="/search_people">
        <PerfilGitHubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
