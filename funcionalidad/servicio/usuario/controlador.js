const logicaDB = require('./logicaDB');

const crearUsuario = async (req,res) => {
    let usuario = req.body;

    try {
        let respuesta = await logicaDB.crearUsuarioDB(usuario);
        res.status(200).json({
            'usuario': respuesta
        })
    } catch (error) {
        res.status(500).json({
            error
        })
        return;
    }
}

const obtenerUsuario = async (req,res) => {

    try {
        let respuesta = await logicaDB.obtenerUsuarioDB();
        res.status(200).json({
            'usuarios':respuesta
        })
    } catch (error) {
        res.status(500).json({
            error
        })
        return;
    }
}
 
module.exports = {
    crearUsuario,
    obtenerUsuario
}