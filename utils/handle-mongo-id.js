// cambio de _id a id

const handleMongoId = (elemento) => { // elemento -> un documento | un array de documentos
    // elemento -> Va a ser un objeto mongoose --> métodos, funciones 
    const clave = '_id'
    // Convierto un objeto complejo de mongoose (métodos) -> Objeto de js vanilla
    /* convertirObjMongooseEnObjJS() */
    /* fromMongoToVanilla() */
    elemento = JSON.parse(JSON.stringify(elemento)) // Convierto un obj mongoose en un obj de js

    if ( Array.isArray(elemento) ) {
        console.log('Llego un array de productos')

        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id = elemento[i][clave] // producto[0].id = producto[0]._id | producto[1].id = producto[1]._id
            delete elemento[i][clave] // borro producto[0]._id | borro producto[1]._id
        }

    } else {
        console.log('Llegó un documento')
        elemento.id = elemento[clave] // producto.id = producto._id
        delete elemento[clave] // borro producto._id
    }

    return elemento // obj


}

export default handleMongoId