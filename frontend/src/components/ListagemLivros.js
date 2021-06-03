import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"
import { Link } from "react-router-dom";

const ListagemLivros = () => {
    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        buscaLivros();
    }, []);

    const buscaLivros = () => {
        api.getAll()
            .then(response => {
                setLivros(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setLivroAtivo = (livro, index) => {
        setLivroSelecionado(livro);
        setCurrentIndex(index);
    };

    return (
        <div className="container list row">
            <div className="col-md-6">
                <h4>Livros</h4>
                <ul className="list-group py-1">
                    {livros &&
                        livros.map((livro, index) => (
                            <li  className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                 onClick={() => setLivroAtivo(livro, index)}
                                 key={index}
                            >{livro.titulo}</li>
                        ))}
                </ul>
            </div>


            <div className="col-md-6">
                {livroSelecionado ? (
                    <div>
                        <h4>Detalhe</h4>
                        <div>
                            <label>
                                <strong>Titulo:</strong>
                            </label>{" "}
                            {livroSelecionado.titulo}
                        </div>
                        <div>
                            <label>
                                <strong>Autor:</strong>
                            </label>{" "}
                            {livroSelecionado.autor}
                        </div>

                        <Link to={"/livros/" + livroSelecionado.id} className="btn btn-warning">Editar</Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escolha um livro ...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListagemLivros;