import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/animated';
import Resumen from './Resumen';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

class ContenidoPedido extends Component {

    state = {
        productos: []
    }

    seleccionarProducto = (productos) => {
        // console.log(`Algo pasó con`, productos);
        this.setState({
            productos
        })
    }

    actualizarCantidad = (cantidad, index) => {
        // console.log(cantidad);

        // Leer el state de productos
        const productos = this.state.productos;
        productos[index].cantidad = Number(cantidad);
            // console.log(productos); 
            // console.log(index);

        // Actualizar la cantidad de los productos

        // Validación

        // Agregar al state
        this.setState({
            productos
        })
 
    }

    render() {
        return (
            <Fragment>
                <h2 className="text-center mb-5">Seleccionar Artículos</h2>
                <Select 
                    onChange={this.seleccionarProducto}
                    options={this.props.productos} 
                    isMulti={true}
                    components={Animated()}
                    placeholder={'Seleccionar Productos'}
                    getOptionValue={(options) => options.id}
                    getOptionLabel={(options) => options.nombre}
                />
                <Resumen
                    productos={this.state.productos}
                    actualizarCantidad={this.actualizarCantidad}
                />
            </Fragment>
        );
    }
}

export default ContenidoPedido;