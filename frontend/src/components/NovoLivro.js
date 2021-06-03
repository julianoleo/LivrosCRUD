import React, { useState } from "react";
import * as api from "../services/Endpoints"

const NovoLivro = () => {
    const estadoInicialLivro = {
        id: null,
        titulo: "",
        autor: "",
    };
    const [livro, setLivro] = useState(estadoInicialLivro);
    const [submitted, setSubmitted] = useState(false);

    const trataCampo = (event) => {
        const { name, value } = event.target;
        setLivro({ ...livro, [name]: value });
    };

    const novo = () => {
        setLivro(estadoInicialLivro);
        setSubmitted(false);
    };

    const enviarLivro = () => {
        var data = {
            titulo: livro.titulo,
            autor: livro.autor
        };
        console.log(data)
        api.create(data)
            .then(response => {
                setLivro({
                    id: response.data.id,
                    titulo: response.data.titulo,
                    autor: response.data.autor,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Livro cadastrado com sucesso!</h4>
                    <button className="btn btn-success" onClick={novo}>Novo</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            required
                            value={livro.titulo}
                            onChange={trataCampo}
                            name="titulo"
                        />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="description">Autor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="autor"
                            required
                            value={livro.autor}
                            onChange={trataCampo}
                            name="autor"
                        />
                    </div>

                    <button onClick={enviarLivro} className="btn btn-success mt-4">Cadastrar</button>
                </div>
            )}
        </div>
    );
}

export default NovoLivro;