import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListagemLivros from "./components/ListagemLivros.js";
import NovoLivro from "./components/NovoLivro.js";
import DetalheLivro from "./components/DetalheLivro.js";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
       
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/livros"} className="nav-link">Biblioteca</Link>
          </li>
          <li className="nav-item">
            <Link to={"/novo"} className="nav-link">Novo</Link>
          </li> 
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/livros"]} component={ListagemLivros} />
          <Route exact path="/novo" component={NovoLivro} />
          <Route path="/livros/:id" component={DetalheLivro} />
        </Switch>
      </div>
    </div>
  );
}

export default App;