const Usuario = require('./usuario.model');

const crearUsuarioDB = async (usuario) => {
    let respuesta = await Usuario.create(usuario);
    return respuesta;
}

const obtenerUsuarioDB = async () => {
    let respuesta = await Usuario.find();
    return respuesta;
}

module.exports = {
    crearUsuarioDB,
    obtenerUsuarioDB
}

 