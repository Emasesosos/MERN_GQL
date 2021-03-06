import gql from 'graphql-tag';

// ***** CLIENTES ***** //
export const CLIENTES_QUERY = gql `
    query getClientes($limite: Int, $offset: Int, $vendedor: String) {
        getClientes(limite: $limite, offset: $offset, vendedor: $vendedor){ 
            id
            nombre
            apellido
            empresa
        }
        totalClientes(vendedor: $vendedor)
    } 
`;

export const CLIENTE_QUERY = gql `
    query ConsultarCliente($id:ID){
        getCliente(id: $id){
            id
            nombre
            apellido
            empresa
            emails {
                email
            }
            edad
            tipo
        }
}`;

// ***** PRODUCTOS ***** //
export const OBTENER_PRODUCTOS = gql `
    query obtenerProductos($limite: Int, $offset: Int, $stock: Boolean) {
        obtenerProductos(limite: $limite, offset: $offset, stock: $stock) {
            id
            nombre
            precio
            stock
        }
        totalProductos 
    }
`;

export const OBTENER_PRODUCTO = gql `

    query obtenerProducto($id: ID!) {
        obtenerProducto(id: $id) {
            nombre
            precio
            stock
        }
    }
`;

// ***** PEDIDOS ***** //
export const OBTENER_PEDIDOS = gql `
    query obtenerPedidos($cliente: String) {
        obtenerPedidos(cliente: $cliente) {
            id
            pedido {
                id
                cantidad
            }
            total
            fecha
            cliente
            estado
        }
    }
`;

// ***** GRÁFICAS ***** //
export const TOP_CLIENTES = gql `

    query topClientes {
        topClientes {
            total
            cliente {
                nombre
            }
        }
    }
`;

export const TOP_VENDEDORES = gql `

    query topVendedores {
        topVendedores {
            total
            vendedor {
                nombre
        }
    }
}
`;

// ***** USUARIOS ***** //

export const USUARIO_ACTUAL = gql `
    query obtenerUsuario {
        obtenerUsuario {
            id
            usuario
            nombre
            rol 
        }
    }
`;