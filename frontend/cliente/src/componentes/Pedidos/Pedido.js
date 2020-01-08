import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { OBTENER_PRODUCTO } from './../../queries';
import { ACTUALIZAR_ESTADO } from './../../mutations';
import Cdesvanecido from './../Spinners/Cdesvanecido';
import ResumenProducto from './ResumenProducto';

const Pedido = (props) => {
    
    // console.log(props);
    const { pedido } = props;
    const fecha = new Date(Number(pedido.fecha));
    // console.log('Pedido: ', pedido);
    // console.log(Number(pedido.fecha));
    const { id } = pedido;
    // console.log(id);

    return (
        <div className="col-md-4">
            <div className={`card mb-3`} >
                <div className="card-body">
                    <p className="card-text font-weight-bold ">Estado:
                        <Mutation mutation={ACTUALIZAR_ESTADO}>
                            {actualizarEstado => (
                                <select 
                                    className="form-control my-3"
                                    value={pedido.estado}
                                    onChange={ e=> {
                                        console.log(e.target.value);
                                        const input =  {
                                            id,
                                            pedido: pedido.pedido,
                                            fecha: pedido.fecha,
                                            total: pedido.total,
                                            cliente: props.cliente,
                                            estado: e.target.value
                                        }
                                        // console.log(input);
                                        actualizarEstado({
                                            variables: {input}
                                        })
                                    }}
                                >
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="COMPLETADO">COMPLETADO</option>
                                        <option value="CANCELADO">CANCELADO</option>
                                </select>
                            )}
                        </Mutation>
                    </p> 
                    <p className="card-text font-weight-bold">Pedido ID: 
                        <span className="font-weight-normal"> {pedido.id}</span>
                    </p> 
                    <p className="card-text font-weight-bold">Fecha Pedido: 
                        <span className="font-weight-normal"> {fecha.toLocaleString("es-MX")}</span>
                    </p>
                    <p className="card-text font-weight-bold">Total: 
                        <span className="font-weight-normal"> $ {pedido.total}</span>
                    </p>

                    <h3 className="card-text text-center mb-3">Artículos del pedido</h3>
                    {
                        pedido.pedido.map((producto, index) => {
                            // console.log(producto);
                            const { id, cantidad } = producto;
                                return (
                                    <Query key={pedido.id+index} query={OBTENER_PRODUCTO} variables={{id}}>
                                        {
                                            ({loading, error, data}) => {
                                                if(loading) return( <Cdesvanecido/> );
                                                if(error) return `Error ${error.message}`;
                                                // console.log(data); 
                                                return(
                                                    <ResumenProducto
                                                        data={data}
                                                        cantidad={cantidad}
                                                        key={id}
                                                    />
                                                );
                                            }
                                        }
                                    </Query>
                                );
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Pedido;