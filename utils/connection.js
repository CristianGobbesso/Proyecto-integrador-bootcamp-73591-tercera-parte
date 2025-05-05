import mongoose from 'mongoose'
// conexion mongoose 
const connection = async (uri) => {

    try {
        await mongoose.connect(uri)
        console.log('Conexión a MongoDB OK')    
    } catch (error) {
        console.log('Conexión Error', error)
    }

}

export default connection