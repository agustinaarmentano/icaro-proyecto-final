// const Email = require('../models/emails')
const db = require('../models/index');
const Email = db.emails

class EmailController {
    constructor() {}
    
    create(email, req, res){
        const user_id = req.session.user_id;
        console.log('user id al crear email')
        return Email.create(email)
        .then((res) => res)
        .catch((err)=> err)
    }
    get() {
        return Email.findAll({
        include:{
            model : db.usuarios
        }})
        .then((data) => data)
        .catch((err) => console.log(err))
    }
    getEnviados(req, res) {
        console.log(req.session)
        return Email.findAll({ where: { enviado: 1 },include:{model : db.usuarios}})
        .then((data) => data)
        .catch((err) => console.log(err))
    }
    getRecibidos(req, res) {
        console.log(req.session)
        return Email.findAll({ where: { recibido: 1 },include:{model : db.usuarios} })
        .then((data) => data)
        .catch((err) => console.log(err))
    }
}
module.exports = EmailController;