var jwt = require('jsonwebtoken');

var payload={
  userdata:{'email' : 'joe@doe.com', 'phone':'5561671327'}
}
const clave = "ClaveFuerte9908";
const token = jwt.sign(payload , clave, { expiresIn: 60 * 5}); //Aqui es la duracion
//del token
