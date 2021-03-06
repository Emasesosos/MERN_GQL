import React, { Fragment } from 'react'

const ResumenProducto = (props) => {
    // console.log(props);
    const { data, cantidad } = props;
    const { obtenerProducto } = data;
    const { nombre, precio } = obtenerProducto;
    // console.log(data, cantidad);
    // console.log(obtenerProducto);

    return(
        <Fragment>
            <div className="contenedor-productos mb-4 p-4">
                <p className="card-text font-weight-bold">
                    Nombre del Producto:
                    <span className="font-weight-normal"> {nombre}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Cantidad:
                    <span className="font-weight-normal"> {cantidad}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Precio:
                    <span className="font-weight-normal"> $ {precio}</span>
                </p>
            </div>
        </Fragment>
    );
}

export default ResumenProducto;