import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const initialState = {
    nombre: "",
    categoria: "",
};

const Formulario = () => {
    const [search, setSearch] = useState(initialState);
    const { categoria } = search;

    const { categories } = useContext(CategoriasContext);
    const { buscarRecetas, setConsultar } = useContext(RecetasContext);

    //funcion para leer los campos de el formulario
    const getDataForm = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <form
                className="col-12"
                onSubmit={(e) => {
                    e.preventDefault();
                    buscarRecetas(search);
                    setConsultar(true);
                }}
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por categoria o ingrediente</legend>
                </fieldset>
                <div className="row mt-4">
                    {/* <div className="col-md-4">
            <input 
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Buscar por ingrediente"
              onChange={getDataForm}
              value={nombre}
            />
          </div> */}
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="categoria"
                            onChange={getDataForm}
                            value={categoria}
                        >
                            <option value="">--Selecciona categoria--</option>
                            {categories.map((category) => (
                                <option
                                    value={category.strCategory}
                                    key={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="buscar bebidas"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Formulario;
